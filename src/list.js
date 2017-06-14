import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {	
	render() {
		console.log(this.props.rides);
		const tableRows = [];
			for(let ride in this.props.rides)
			{ 
				tableRows.push(
					<tr key={ride.id}>
						<td>{ride.date}</td>
						<td>{ride.direction}</td>
						<td>
							<Link key={ride.id} to={`/ride/${ride.id}`}>
								{parseInt(ride.capacity, 10) - (ride.passengers ? ride.passengers.length : 0)} of {ride.capacity}
							</Link>
						</td>
						<td>{ride.driver}</td>
					</tr>
				)
			}
		

		return (
			<div style={{textAlign:"center"}}>
				<h1>Ride List</h1>
				<button>Add Ride</button>
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