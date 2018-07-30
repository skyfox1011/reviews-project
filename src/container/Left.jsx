import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Select } from '../component';
import { changePage } from '../redux/action';
import './Body.scss';

const Left = props => {
    const { pages, currentIndex, changePage, reviewType } = props;
    const getPages = (page, i) =>
        <Select key={i} index={i} page={page} selected={i === currentIndex} changePage={changePage} reviewType={reviewType} />;

    return (
        <div className="left">
            { pages.map(getPages) }
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
    bindActionCreators({changePage}, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(Left);