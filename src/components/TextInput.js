import React from "react";
/*
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
				);*/
const TextInput = ({ id, name, required, onChange, display}) => {
	if( display === true){
		if(id === "name"){
		return(
			<div className="form-group">
	      		<label className = "form-content" key = {id+'i'} htmlFor = {id}>
	        		{name}
	      		</label>
	      		<input
			        className = "form-input"
			        type = "text"
			        pattern="(?=^.{0,40}$)^[a-zA-Z-]+\s[a-zA-Z-]+$"
			        id = {id}
			        name = {name}
			        required = {required}
			        onChange = {onChange}
		        />
		    </div>
			);
		}else{
		return(
			<div className="form-group">
	      		<label className = "form-content">
	        		{name}
	      		</label>
	      		<input
			        className = "form-input"
			        type = "text"
			        id = {id}
			        name = {name}
			        required = {required}
			        onChange = {onChange}
		        />
		    </div>
			);
		}
	}else{
		return(<input type="hidden"/>);
	}
	

};

export default TextInput;