import React from 'react';
import './Select.scss';

const Select = props => {
    const { page, selected, index, changePage, reviewType } = props;
    let rateClass = '';
    let containerClass = '';

    switch(page.rate) {
        case 'low':
            rateClass = 'rate-low';
            break;
        case 'high':
            rateClass = 'rate-high';
            break;
        case 'fair':
            rateClass = 'rate-fair';
            break;
        default:
    }

    containerClass = selected ? 'selected' : 'select';
    containerClass = reviewType ? containerClass + ' disabled-select' : containerClass;

    return (
        <div className={containerClass} onClick={() => { changePage(index); }}>
            <div className="content">
                <div className="image-container">
                    <img className="image" src={page.image}  />
                </div>
                <div className="info">
                    <div className="name">{page.name}</div>
                    <div className="row">
                        <span className={rateClass}>{page.rate}</span>
                        <span>{page.type}</span>
                    </div>
                    <div className="row">
                        {page.address}
                    </div>
                    <div className="row">
                        {page.reviews.length + ' Reviews'}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Select;