import React, { Component } from 'react';

class Login extends Component {
	render() {
		const labelStyle = {display:"inline-block",marginRight:"10px"};
		return (
			<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
				<form style={{textAlign:"center"}}>
					<label style={labelStyle}>Name</label>
					<input type="text" name="name" placeholder="Enter Name" style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<label style={labelStyle}>Email</label>
					<input type="text" name="email" placeholder="Email" style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<label style={labelStyle}>Phone</label>
					<input type="text" name="phone" placeholder="Phone" style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<input type="submit" value="Login" className="button" /> 
				</form>
			</div>
		);
	}
}

export default Login;