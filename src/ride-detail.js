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
		console.log(this.props.user.name);
		newRide.passengers.push(this.props.user.name);
		this.setState({ride: newRide})
	}
	handleRemovePassenger = (event) => {
		event.preventDefault();
		const newRide = Object.assign({}, this.state.ride);
		console.log(event.target.getAttribute('data'));
		const pos = event.target.getAttribute('data')
		newRide.passengers.splice(pos, 1);
		this.setState({ride: newRide})
	}
	render() {
		const passengerList = this.state.ride.passengers.map((item, index) => {
			let control = (<li key={item}>{item}&nbsp;&nbsp; 
					{item === this.props.user.name ? <span style={{backgroundColor:'red', borderRadius:'50%', color:'white', padding:'3px 6px'}}data={index} onClick={this.handleRemovePassenger}>x</span> : ''}
					</li>				)
			return control
		})
		// console.log('findIndex result:');
		// console.log(this.state.ride.passengers);
		// console.log(this.props.user.name);
		// console.log(this.state.ride.passengers.findIndex(item => item === this.props.user.name));
		let buttonDisplay = ''
		if(this.state.ride.capacity > this.state.ride.passengers.length 
			&& (this.state.ride.passengers.findIndex(item => item === this.props.user.name) < 0)
			&& (this.state.ride.driver !== this.props.user.name))
		{
			buttonDisplay = <button onClick={this.handleAddMeClick}>Add Me</button>
		}
					 
	    return (
			<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
	      	<form > 
		      	<div>
		        	<label>Driver</label>
		        	<input type="text" value={this.state.ride.driver}/>
		     	</div>
		     	<div>
		        	<label>Direction</label>
		        	<input type="radio" name="direction" id="F_to_DT" value="Franklin to Downtown" checked={this.state.ride.direction === "Franklin to Downtown" ? "checked" : ""}/> <label htmlFor="F_to_DT" > Franklin to Downtown </label>
		        	<br/>
					<input type="radio" name="direction" id="DT_to_F" value="Downtown to Franklin" checked={this.state.ride.direction === "Downtown to Franklin" ? "checked" : ""}/> <label htmlFor="DT_to_F" > Downtown to Franklin </label>		        	
		     	</div>
		      	<div>
		        	<label>Time</label>
		        	<input type="text" value={this.state.ride.date}/>
		     	</div>
		      	<div>
					<label>Seats</label>
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