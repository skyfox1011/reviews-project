import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { invokeEdit } from '../../redux/action';
import './Review.scss';

const Review = props => {
    const { review, index, invokeEdit } = props;

    return (
        <div className="review-content">
            <div className="review-date">{review.date}</div>
            <div>
                <h4 className="review-name">{review.name}</h4>
                <span className="review-edit" onClick={() => { invokeEdit(index); }}>Edit</span>
            </div>
            <p className="review-body">{review.body}</p>
        </div>
    )
};

const mapStateToProps = state => ({});
  
const matchDispatchToProps = dispatch =>
    bindActionCreators({invokeEdit}, dispatch);
  
export default connect(mapStateToProps, matchDispatchToProps)(Review);
