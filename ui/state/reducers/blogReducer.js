import {
  SET_BLOG_PAGE_TARGETED,
  CLEAR_BLOG_PAGE_TARGETED,
  SET_BLOG_PAGE_TOTAL,
  SET_POSTS_FETCHED,
} from '../actionTypes';


const initialState = {
  pageTargeted: '',
  pageTotal: '',
  postFetched: {},
  postsFetched: [],
};


export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BLOG_PAGE_TARGETED:
      var newState = JSON.parse(JSON.stringify(state));
      newState.pageTargeted = action.pageTargeted;
      return Object.assign({}, state, newState);

    case CLEAR_BLOG_PAGE_TARGETED:
      var newState = JSON.parse(JSON.stringify(state));
      newState.pageTargeted = undefined;
      return Object.assign({}, state, newState);

    case SET_BLOG_PAGE_TOTAL:
      var newState = JSON.parse(JSON.stringify(state));
      newState.pageTotal = action.pageTotal;
      return Object.assign({}, state, newState);

    case SET_POSTS_FETCHED:
      var newState = JSON.parse(JSON.stringify(state));
      newState.postsFetched = action.postsFetched;
      return Object.assign({}, state, newState);

      // case SET_POST_FETCHED:
      //     var newState = JSON.parse(JSON.stringify(state))
      //     newState.postFetched =action.postFetched
      //     return Object.assign({}, state, newState)

    default:
      return state;
  }
};
