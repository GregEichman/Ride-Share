import React from 'react'

const Header = (props) => {

    const loggedInUser = (props.user.name ? (<div>logged in as: {props.user.name}</div>) : (<div></div>));

    return (
        <div style={{width:"40%",margin:"auto auto", marginTop:"30px",textAlign:"center"}}>
            <h1>NM Ride Share</h1>
            {loggedInUser}
            <hr/>
        </div>
    );
}

export default Header;