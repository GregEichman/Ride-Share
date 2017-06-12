import React, { Component } from 'react';

class Ride extends Component {
	render() {
	    return (
	      <div style={{width:"50%", textAlign: "center"}}>
	      	<form> 
		      	<div>
		        	<label> Driver </label>
		        	<input type="text"/>
		     	</div>
		     	<div>
		        	<label> Direction </label>
		        	<input type="radio" name="direction" id="F_to_DT"/> <label htmlFor="F_to_DT" > Franklin to Downtown </label>
		        	<input type="radio" name="direction" id="DT_to_F"/> <label htmlFor="DT_to_F" > Downtown to Franklin </label>
		        	
		     	</div>
		      	<div>
		        	<label> Time </label>
		        	<input type="text"/>
		     	</div>
		      	<div>
		        	<label> Seats </label>
		        	<input type="text"/>
		     	</div>
		      	<div>
		        	<label> Notes </label>
		        	<textarea cols="45" rows="10"></textarea>
		     	</div>
	     	</form>

	      </div>
	    );
	}
}
export default Ride;