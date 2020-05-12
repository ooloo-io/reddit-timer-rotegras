import {
  SET_DATA, SET_ACTIVECELL,
} from "../constants/actionTypes";


const initialState = {
  data: [],
  activeCell: [null, null],
};


function rootReducer(state = initialState, action) {
  switch (action.type) {

    case SET_DATA:
      return Object.assign({}, state, { data: action.payload });

    case SET_ACTIVECELL:
      return Object.assign({}, state, { activeCell: action.payload });

    default: return state;
  }
}


export default rootReducer;
