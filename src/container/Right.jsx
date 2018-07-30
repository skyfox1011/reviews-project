import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { changeReview } from '../redux/action';
import { SubHeader } from '../component';
import Reviews from './Reviews.jsx';
import './Body.scss';

const Right = props => {
    const { pages, currentIndex, reviewType, changeReview } = props;
    const page = pages[currentIndex];
    const reviews = pages[currentIndex].reviews;

    return (
        <div className="right">
          <SubHeader page={page} />
          <Reviews reviews={reviews} reviewType={reviewType} changeReview={changeReview} />
        </div>
    )
};

const mapStateToProps = state => {
    return {
        pages: state.pages,
        currentIndex: state.currentIndex,
        reviewType: state.reviewType
    }
}

const matchDispatchToProps = dispatch =>
    bindActionCreators({changeReview}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Right);