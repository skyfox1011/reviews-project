import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { saveChanges } from '../../redux/action';
import GreenButton from '../Button/GreenButton.jsx';
import RedButton from '../Button/RedButton.jsx';
import './UpdateReview.scss';

class UpdateReview extends React.Component {
  constructor(props) {
    super(props);

    const { pages, currentIndex, reviewIndex } = props;

    this.state = {
      name: reviewIndex !== null ? pages[currentIndex].reviews[reviewIndex].name : '',
      body: reviewIndex !== null ? pages[currentIndex].reviews[reviewIndex].body : ''
    }

    this.addReview = this.addReview.bind(this);
    this.deleteReview = this.deleteReview.bind(this);
    this.updateReview = this.updateReview.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  addReview() {
    const { pages, currentIndex, reviewIndex, saveChanges } = this.props;
    let obj = pages;

    if (this.state.name && this.state.body) {
      
      const data = {
        name: this.state.name,
        body: this.state.body,
        date: new Date().toDateString()
      };
      obj[currentIndex].reviews.push(data);
    }

    saveChanges(obj);
  }

  deleteReview() {
    const { pages, currentIndex, reviewIndex, saveChanges } = this.props;
    let obj = pages;
    obj[currentIndex].reviews.splice(reviewIndex, 1);

    saveChanges(obj);
  }

  updateReview() {
    const { pages, currentIndex, reviewIndex, saveChanges } = this.props;
    let obj = pages;

    if (this.state.name && this.state.body) {
      
      obj[currentIndex].reviews[reviewIndex].name = this.state.name;
      obj[currentIndex].reviews[reviewIndex].body = this.state.body;
    }

    saveChanges(obj);
  }

  changeInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    const { pages, currentIndex, reviewIndex } = this.props;
    const title = reviewIndex ? 'Update' : 'Provide'; 

    return (
      <div>
        <h2 className="update-title">{ title + ' your feedback' }</h2>
        <div className="input-row">
          <fieldset className="input-field">
            <legend className="legend">Your review</legend>
            <textarea
              className="input-review"
              name="body"
              onChange={this.changeInput}
              defaultValue={ reviewIndex !== null ? pages[currentIndex].reviews[reviewIndex].body : '' }>
            </textarea>
          </fieldset>
        </div>
        <div className="input-row">
          <fieldset className="input-field">
            <legend className="legend">Your display name</legend>
            <input
              className="input-name"
              type="text"
              name="name"
              onChange={this.changeInput}
              defaultValue={ reviewIndex !== null ? pages[currentIndex].reviews[reviewIndex].name : '' }
            />
          </fieldset>
        </div>
        { reviewIndex !== null && <span className="update-button"><GreenButton callBack={this.updateReview}>Update</GreenButton></span> }
        { reviewIndex !== null && <span className="update-button"><RedButton callBack={this.deleteReview}>Remove</RedButton></span> }
        { reviewIndex === null && <span className="update-button"><GreenButton callBack={this.addReview}>Add Review</GreenButton></span> }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
      pages: state.pages,
      currentIndex: state.currentIndex,
      reviewIndex: state.reviewIndex
  }
}

const matchDispatchToProps = dispatch =>
  bindActionCreators({saveChanges}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(UpdateReview);