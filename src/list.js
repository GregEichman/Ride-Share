import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class List extends Component {
	state = {
		rideHelper: [],
		addingRide: false
	}

	componentWillMount() {
		const helper = [];
		for(let ride in this.props.rides) {
			helper.push(this.props.rides[ride]);
		}
		this.setState({
			rideHelper: helper,
			addingRide: false
		});
	}

	addRide = (event) => {
		event.preventDefault();
		this.setState({
			addingRide: true
		});
	}

	render() {
		if(this.state.addingRide) {
			return <Redirect to="/ride/new" />
		}
		
		const tableRows = this.state.rideHelper.map((ride) => {
			return (
				<tr key={ride.id}>
					<td>{ride.date}</td>
					<td>{ride.direction}</td>
					<td>
						<Link key={ride.id} to={`/ride/${ride.id}`}>
							{ride.capacity - (ride.passengers ? ride.passengers.length : 0)} of {ride.capacity}
						</Link>
					</td>
					<td>{this.props.users[ride.driver].name}</td>
				</tr>
			)
		})

		return (
			<div style={{textAlign:"center"}}>
				<h1>Ride List</h1>
				<button onClick={this.addRide}>Add Ride</button>
				<table className="table" style={{width:"50%",margin:"auto auto"}}>
					<thead>
						<tr>
							<th>Date/Time</th>
							<th>Direction</th>
							<th>Seats Available</th>
							<th>Driver</th>
						</tr>
					</thead>
					<tbody>
					{tableRows}
					</tbody>
				</table>
			</div>
		);
	}
}

export default List;