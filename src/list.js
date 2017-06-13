import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
	render() {
		const tableRows = this.props.rides.map((ride) => {
			return (
					<Link key={ride.id} to={`/ride/${ride.id}`}>
				<tr  key={ride.id}>
						<td>{ride.date}</td>
						<td>{ride.direction}</td>
						<td>{ride.passengers.length} of {ride.capacity}</td>
						<td>{ride.driver}</td>
				</tr>
					</Link>
			)
		})
		return (
			<div style={{textAlign:"center"}}>
				<h1>Ride List</h1>
				<button>Add Ride</button>
				<table className="table" style={{width:"50%",margin:"auto auto"}}>
					<thead>
						<th>Date/Time</th>
						<th>Depart From</th>
						<th>Seats Available</th>
						<th>Driver</th>
					</thead>
					{tableRows}
				</table>
			</div>
		);
	}
}

export default List;