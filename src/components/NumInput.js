import React from "react";

const NumInput = ({ id, name, unitOfMeasure, required, display, max, onChange}) => {
	if( display === true){
		return (
		<div className="form-group">
	      <label className = "form-content" key = {id+'i'} htmlFor = {id}>
	        {name} ({unitOfMeasure})
	      </label>
	      <input
	        className = "form-input"
	        id = {id}
	        name = {name}
	        type = "number"
	        min = "1"
	        required = {required}   
	        max = {max}
	        onChange = {onChange}
	      />
	    </div>
		);
	}else{
		return(<input type="hidden"/>);
	}
	

};

export default NumInput;