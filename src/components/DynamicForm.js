import React from 'react';
import TextInput from './TextInput';
import Select from './Select';
import NumInput from './NumInput';
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
	onChange = (e)=>{
		this.setState({
			[e.target.id]: e.target.value
		})
	}
	
	/*renderForm = () =>{
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
	}*/
	renderForm = () =>{
		let model = this.props.model;
		let formUI = model.map((m)=>{
			if(m.type === 'textInput'){
				return (
					<TextInput
						key = {m.id+'i'}
						id = {m.id}
						name = {m.displayName}
						required = {m.isRequired}
						display = {m.display}
						onChange = {this.onChange}
					/>
				);
			}
			if(m.type === 'select'){
				return(
					<Select
						key = {m.id+'i'}
						id = {m.id}
						name = {m.displayName}
						required = {m.isRequired}
						display = {m.display}
						options = {m.options}
						onChange = {this.onChange}
					/>
				);
			}
			if(m.type === 'numberInput'){
				return(
					<NumInput
						key = {m.id+'i'}
						id = {m.id}
						name = {m.displayName}
						required = {m.isRequired}
						display = {m.display}
						unitOfMeasure = {m.unitOfMeasure}
						max = {m.bounds.upperLimit}
						onChange = {this.onChange}
					/>
				);
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