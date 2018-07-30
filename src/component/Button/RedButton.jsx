import React from 'react';
import './Button.scss';

const RedButton = props => {
    const { callBack } = props;

    return (
      <button className="red-button" onClick={ () => { callBack(); } }>{props.children}</button>
    )
};

export default RedButton;