import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Ride extends Component {
	state = {
		ride: {}
	}

    componentWillMount() {
		// console.log(this.props.ride);
		const { ride } = this.props;
		let newRide;
		let dt = new Date();
		const formattedDate = (dt.getFullYear() + '-' 
			+ ('00' + (dt.getMonth() + 1)).slice(-2) + '-' 
			+ ('00' + dt.getDay()).slice(-2) + 'T' 
			+ ('00' + dt.getHours()).slice(-2) + ':' 
			+ ('00' + dt.getMinutes()).slice(-2))
		if(ride === null) {
			newRide = {};
			newRide.date = formattedDate;
			newRide.driver = this.props.user.id;
			newRide.passengers = [];
		} else {
			newRide = Object.assign({},ride);
			if(!ride.passengers) {
				newRide.passengers = [];
			}
		}
		this.setState({ride : newRide})
    }
	handleAddMeClick = (event) => {
		event.preventDefault();
		const newRide = Object.assign({}, this.state.ride);
		// console.log(this.props.user.name);
		newRide.passengers.push(this.props.user.id);
		this.setState({ride: newRide})
	}
	handleRemovePassenger = (event) => {
		event.preventDefault();
		const newRide = Object.assign({}, this.state.ride);
		// console.log(event.target.getAttribute('data'));
		const pos = event.target.getAttribute('data')
		newRide.passengers.splice(pos, 1);
		this.setState({ride: newRide})
	}
	handleSave = (event) => {
		event.preventDefault();
		const newRide = Object.assign({},this.state.ride);
		this.props.handleSave(newRide,this.state.ride.passengers);
	}
	handleChange = (event) => 
	{
		const {name, value} = event.target;
		let newRide = Object.assign({}, this.state.ride, {[name]: value})
		this.setState({ride: newRide});
	}
	setPage = ()=>{
		if(this.props.ride !== null) {
			let pL = this.state.ride.passengers;
			if(!pL) {
				pL = [];
			}
			const passengerList = pL.map((item, index) => {
				let control = (<li key={item}>{this.props.users[item].name}&nbsp;&nbsp; 
						{item === this.props.user.id ? <span style={{backgroundColor:'red', borderRadius:'50%', color:'white', padding:'3px 6px'}}data={index} onClick={this.handleRemovePassenger}>x</span> : ''}
						</li>				
					)
				return control
			})
			// console.log('findIndex result:');
			// console.log(this.state.ride.passengers);
			// console.log(this.props.user);
			// console.log(this.state.ride.passengers.findIndex(item => item === this.props.user.name));
			let buttonDisplay = ''
			console.log(this.state.ride);
			if(this.state.ride.capacity > this.state.ride.passengers.length 
				&& (this.state.ride.passengers.findIndex(item => item === this.props.user.id) < 0)
				&& (this.state.ride.driver !== this.props.user.id))
			{
				buttonDisplay = <button onClick={this.handleAddMeClick}>Add Me</button>
			}
						 
		    return (
				<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
		      	<form > 
			      	<div>
			        	<label>Driver</label>
			        	<input type="text" value={this.props.users[this.state.ride.driver].name}/>
			     	</div>
			     	<div>
			        	<label>Direction</label>
			        	<input type="radio" name="direction" id="F_to_DT" value="Franklin to Downtown" readOnly checked={this.state.ride.direction === "Franklin to Downtown" ? "checked" : ""}/> <label htmlFor="F_to_DT" > Franklin to Downtown </label>
			        	<br/>
						<input type="radio" name="direction" id="DT_to_F" value="Downtown to Franklin" readOnly checked={this.state.ride.direction === "Downtown to Franklin" ? "checked" : ""}/> <label htmlFor="DT_to_F" > Downtown to Franklin </label>		        	
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
			        	<textarea cols="45" rows="10" value={this.state.ride.notes} readOnly style={{backgroundColor:"white",color:"black"}}></textarea>
			     	</div>
			      	<div>
					  	<Link to="/home">
						  	<button>Return</button>
						</Link>
						<button onClick={this.handleSave}>Save</button>		        	
			     	</div>
		     	</form>

		      </div>
		    );
		} else {
			// console.log("no ride");
			return (
				<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
		      	<form > 
			      	<div>
			        	<label>Driver</label>
			        	<input type="text" value={this.props.user.name} />
			     	</div>
			     	<div>
			        	<label>Direction</label>
			        	<input type="radio" name="direction" id="F_to_DT" value="Franklin to Downtown" onChange={this.handleChange} /> <label htmlFor="F_to_DT" > Franklin to Downtown </label>
			        	<br/>
						<input type="radio" name="direction" id="DT_to_F" value="Downtown to Franklin" onChange={this.handleChange} /> <label htmlFor="DT_to_F" > Downtown to Franklin </label>		        	
			     	</div>
			      	<div>
			        	<label>Time</label>
			        	<input type="datetime-local" name="date" value={this.state.ride.date} onChange={this.handleChange} />
			     	</div>
			      	<div>
						<label>Seats</label>
						<input type="text" name="capacity" value={this.state.ride.capacity} onChange={this.handleChange} />
			     	</div>
			      	<div>
			        	<label> Notes </label>
			        	<textarea cols="45" rows="10" name="notes" value={this.state.ride.notes} onChange={this.handleChange} style={{backgroundColor:"white",color:"black"}}></textarea>
			     	</div>
			      	<div>
					  	<Link to="/home">
						  	<button>Return</button>
						</Link>
						<button onClick={this.handleSave}>Save</button>		        	
			     	</div>
		     	</form>

		      </div>
		    );
		}
	}
	render() {
		return this.setPage();
	}
}
export default Ride;