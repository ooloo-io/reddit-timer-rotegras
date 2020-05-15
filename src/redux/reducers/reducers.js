import {
  SET_DATA, SET_ACTIVECELL, SET_HOURPOSTS,
} from '../constants/actionTypes';


const initialState = {
  data: [],
  activeCell: { day: null, hour: null },
  hourPosts: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };

    case SET_ACTIVECELL:
      return { ...state, activeCell: action.payload };

    case SET_HOURPOSTS:
      return { ...state, hourPosts: action.payload };

    default: return state;
  }
}


export default rootReducer;
