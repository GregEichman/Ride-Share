import React, { Component } from 'react';

class Ride extends Component {
	state = {
		ride: {}
	}

    componentWillMount() {
		console.log(this.props.ride);
		const { ride } = this.props;
		this.setState({ride : ride})
    }
	render() {
	    return (
			<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
	      	<form> 
		      	<div style={{display:'inline-block'}}>
		        	<label> Driver </label>
		        	<input type="text" value={this.state.ride.driver}/>
		     	</div>
		     	<div>
		        	<label> Direction </label>
		        	<input type="radio" name="direction" id="F_to_DT" checked={this.state.ride.direction === "F_to_DT" ? "checked" : ""}/> <label htmlFor="F_to_DT" > Franklin to Downtown </label>
		        	<input type="radio" name="direction" id="DT_to_F" checked={this.state.ride.direction === "DT_to_F" ? "checked" : ""}/> <label htmlFor="DT_to_F" > Downtown to Franklin </label>		        	
		     	</div>
		      	<div>
		        	<label> Time </label>
		        	<input type="text" value={this.state.ride.date}/>
		     	</div>
		      	<div>
		        	<label> Seats </label>
		        	<input type="text" value={this.state.ride.capacity}/>
		     	</div>
		      	<div>
		        	<label> Notes </label>
		        	<textarea cols="45" rows="10">{this.state.ride.notes}</textarea>
		     	</div>
	     	</form>

	      </div>
	    );
	}
}
export default Ride;