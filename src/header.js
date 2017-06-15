import React from 'react'
import car from "./car.png";

const Header = (props) => {

    const loggedInUser = (props.user.name ? (<div>logged in as: {props.user.name}</div>) : (<div></div>));

    return (
        <div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
            <h1>NM Ride Share</h1>
            {loggedInUser}
            <marquee direction="right"><img src={car} style={{height:40,width:40}} alt="car pic" /></marquee>
            <hr/>
        </div>
    );
}

export default Header;