export const TYPES = {
    CHANGE_PAGE: 'CHANGE_PAGE',
    UPDATE_PAGES: 'UPDATE_PAGES',
    CHANGE_REVIEW: 'CHANGE_REVIEW',
    CHANGE_REVIEW_INDEX: 'CHANGE_REVIEW_INDEX'
};

export const changePage = (index = 0) => ({ type: TYPES.CHANGE_PAGE, payload: index });

export const updatePages = pages => ({ type: TYPES.UPDATE_PAGES, payload: pages });

export const changeReview = (mode = '') => ({ type: TYPES.CHANGE_REVIEW, payload: mode });

export const changeReviewIndex = (index) => ({ type: TYPES.CHANGE_REVIEW_INDEX, payload: index });

export const saveChanges = pages => {
    return (dispatch, getState) => {
      dispatch(updatePages(pages));
      dispatch(changeReview(''));
      dispatch(changeReviewIndex(null));
    };
};

export const invokeEdit = index => {
    return (dispatch, getState) => {
      dispatch(changeReviewIndex(index));
      dispatch(changeReview('update'));
    };
};