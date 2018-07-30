import React from 'react';
import { Review, GreenButton, UpdateReview } from '../component';
import './Body.scss';

class Reviews extends React.Component {
    constructor(props) {
        super(props);

        this.addReview =this.addReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
    }

    addReview() {
        this.props.changeReview('add');
    }

    updateReview() {
        this.props.changeReview('update');
    }

    render() {
        const { reviews, reviewType, changeReview } = this.props;
        const getReviews = (review, i) => <Review key={i} review={review} index={i} />

        return (
            <div className="reviews">
                <div className="reviews-list">
                    { !reviewType ? reviews.map(getReviews) : <UpdateReview /> }
                </div>
                <div className="add-review-container">
                    { !reviewType && <GreenButton callBack={this.addReview}>Leave review</GreenButton> }
                </div>
            </div>
        )
    }
}

export default Reviews;