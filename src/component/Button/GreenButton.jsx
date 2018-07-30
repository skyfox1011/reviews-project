import React from 'react';
import './Button.scss';

const GreenButton = props => {
    const { callBack } = props;
    return (
      <button className="green-button" onClick={ () => { callBack(); } }>{props.children}</button>
    )
};

export default GreenButton;