import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ride extends Component {
	state = {
		ride: {}
	}

    componentWillMount() {
		console.log(this.props.ride);
		const { ride } = this.props;
		this.setState({ride : ride})
    }
	handleAddMeClick = (event) => {
		event.preventDefault();
		const newRide = Object.assign({}, this.state.ride);
		//const newPassList = [...this.state.ride.passengers];
		newRide.passengers.push("Charlie Mead");
		console.log()
		this.setState({ride: newRide})
	}
	render() {
		const passengerList = this.state.ride.passengers.map((item) => {
			return <li>{item}</li>
		})
		let buttonDisplay = ''
		if(this.state.ride.capacity > this.state.ride.passengers.length)
			buttonDisplay = <button onClick={this.handleAddMeClick}>Add Me</button>
					 
	    return (
			<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
	      	<form > 
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
		        	<label>Passengers</label>
				 	<ol>{ passengerList }</ol>
					 { buttonDisplay }
				 </div>
		      	<div>
		        	<label> Notes </label>
		        	<textarea cols="45" rows="10">{this.state.ride.notes}</textarea>
		     	</div>
		      	<div>
				  	<Link to="/home">
					  	<button>Return</button>
					</Link>
		        	
		     	</div>
	     	</form>

	      </div>
	    );
	}
}
export default Ride;