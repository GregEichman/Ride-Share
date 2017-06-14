import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {	
	state = {
		user: {},
		login: false
	}

	handleChange = (event) => 
	{
		const {name, value} = event.target;
		let newUser = Object.assign({}, this.state.user, {[name]: value})
		this.setState({user: newUser});
	}

	stringChange = (str) =>{
		let newStr = str.toLowerCase();
		let idx = newStr.indexOf(" ");
		while(idx !== -1) {
			newStr = newStr.slice(0,idx)+newStr.slice(idx+1);
			idx = newStr.indexOf(" ");
		}
		return newStr;
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const id = this.stringChange(this.state.user.name);
		this.props.handleLogin({id:this.state.user});
		this.setState({login: true});
	}

    componentWillMount() {
		// console.log(this.props.user);
		const { user } = this.props;
		// console.log(user);
		this.setState({user : user});
    }

	render() {
		if(this.state.login === true)
		{
			console.log('about to redirect')
			return <Redirect to="/home" />
		}
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