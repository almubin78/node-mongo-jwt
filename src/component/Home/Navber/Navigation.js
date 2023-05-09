import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link style={{'marginLeft':'75px'}} to='/'>Home</Link>
            <Link style={{'marginLeft':'75px'}} to='/login'>Login</Link>
            <Link style={{'marginLeft':'75px'}} to='/orders'>Orders</Link>
            <Link style={{'marginLeft':'75px'}} to='/cong'>SuccessFully Login</Link>
        </div>
    );
};

export default Navigation;