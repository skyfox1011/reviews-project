import React from 'react';
import './Header.scss';

const Header = props => {
    return (
        <div className="header">
            <span className="title">Doctors</span>
            <input type="text" className="input" placeholder="Search doctors by name" />
        </div>
    )
};

export default Header;