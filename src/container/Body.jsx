import React from 'react';
import { Header } from '../component';
import Left from './Left.jsx';
import Right from './Right.jsx';
import './Body.scss';

const Body = props => {
    return (
        <div className="main">
            <div className="container">
                <Header />
                <Left />
                <Right />
            </div>
        </div>
    )
};

export default Body;