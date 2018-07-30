import React from 'react';
import './SubHeader.scss';

const SubHeader = props => {
    const { page } = props;

    return (
      <div className="subheader">
        <div className="image-container">
          <img className="image" src={page.image}  />
        </div>
        <div className="info">
          <h2 className="name">{page.name}</h2>
          <div className="type">{page.type}</div>
          <div className="review">{page.reviews.length + ' reviews'}</div>
        </div>
        <div className="address-content">
          <div className="address-label">address</div>
          <div className="address">{page.address}</div>
        </div>
      </div>
    )
};

export default SubHeader;