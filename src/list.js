import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<div style={{textAlign:"center"}}>
				<h1>Ride List</h1>
				<button>Add Ride</button>
				<table className="table" style={{width:"50%",margin:"auto auto"}}>
					<thead>
						<th>Date/Time</th>
						<th>Depart From</th>
						<th>Seats Available</th>
					</thead>
					<tr>
						<td>6/12 3:00pm</td>
						<td>Franklin</td>
						<td>2</td>
					</tr>
					<tr>
						<td>6/12 4:00pm</td>
						<td>Downtown</td>
						<td>4</td>
					</tr>
				</table>
			</div>
		);
	}
}

export default List;