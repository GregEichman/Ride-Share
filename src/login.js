import React, { Component } from 'react';

class Login extends Component {	
	state = {
		user: {}
	}

	handleChange = (event) => 
	{
		const {name, value} = event.target;
		let newUser = Object.assign({}, this.state.user, {[name]: value})
		this.setState({user: newUser});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('submit the form')
	}

    componentWillMount() {
		console.log(this.props.user);
		const { user } = this.props;
		console.log(user);
		this.setState({user : user});
    }

	render() {
		const labelStyle = {display:"inline-block",marginRight:"10px"};
		return (
			<div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
				<form style={{textAlign:"center"}} action="/home"  onSubmit={this.handleSubmit}>
					<label style={labelStyle}>Name</label>
					<input type="text" name="name" id="name"  placeholder="Enter Name" onChange={this.handleChange} value={this.state.user.name} style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<label style={labelStyle}>Email</label>
					<input type="text" name="email" id="email"  placeholder="Email" onChange={this.handleChange} value={this.state.user.email}  style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<label style={labelStyle}>Phone</label>
					<input type="text" name="phone"  id="phone" placeholder="Phone" onChange={this.handleChange} value={this.state.user.phone} style={{display:"inline-block",width:"80%"}} />
					<div></div>
					<input type="submit" value="Login" className="button" /> 
				</form>
			</div>
		);
	}
}

export default Login;