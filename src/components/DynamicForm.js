import React from 'react';
import ReactDOM from 'react-dom';
import './DynamicForm.css';

export default class dynamicForm extends React.Component{
	state = {};
	constructor(props){
		super(props);
	}
	onSubmit = (e) => {
		e.preventDefault();
		if(this.props.onSubmit) this.props.onSubmit(this.state);
	}
	onChange = (e,key)=>{
		this.setState({
			[key]: this[key].value
		})
	}
	renderForm = () =>{
		let model = this.props.model;
		let formUI = model.map((m)=>{
			let key = m.id;
			if(m.display === true){
				return (
					<div key={m.id} className = 'form-content'>
						<label className = 'form-label'
							key = {m.id+'1'}
							htmlFor = {m.id}>
							{m.displayName}
						</label>
						<input
							required = {m.isRequired}
							ref = {(key)=>{this[m.id]=key}}
							className = 'form-input'
							type = {m.type}
							key = {'i'+m.id}
							onChange = {(e)=>{this.onChange(e,key)}}
						/>
					</div>
				);
			}
			else{
				return (<input key={m.id+'l'} type = 'hidden'/>);
			}
			
		});
		return formUI;
	}
	render(){
		let title = this.props.title || 'Dyanmic Form';

		return(
			<div className='main'>
				<h1>{title}</h1>
				<form className = 'dynamic-form' onSubmit={(e)=>{this.onSubmit(e)}}>
					{this.renderForm()}
					<div className = 'form-content'>
						<button type = 'submit'> Submit </button>
					</div>
				</form>
			</div>
		);
	}
}