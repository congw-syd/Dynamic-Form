import React from "react";

const DropdownSelect = ({ id, name, onChange, required, options, display, defaultOption}) =>{
	
	/*let defaultObj = { ...defaultOption[0]}*/
	
	if( display === true){
		return (
		<div className="form-group">
			<label className = "form-content" key = {id+'i'} htmlFor = {id}>
				{name}
			</label>
			<select
				className="form-input" 
				id={id} 
				required = {required} 
				onChange = {onChange} 
				/*defaultValue = {defaultObj.name}*/
			>	
				<option value = ''></option>
				{options.map(option=>{
					return (
						<option 
							key = {option.id} 
							value = {option.name}						
						>
							{option.name}
						</option>
					);
					
				})}

			</select>
		</div>
		);
	}else{
		return(<input type="hidden"/>);
	}

};

export default DropdownSelect;