import {
  SET_DATA, SET_ACTIVECELL,
} from '../constants/actionTypes';
import { timezoneDifference } from '../../config';


const initialState = {
  data: [],
  activeCell: { day: null, hour: null },
};


function groupPostsByWeekdayAndHour(items) {
  const sortPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));

  items.forEach((item) => {
    const clientDate = (item.data.created_utc + timezoneDifference) * 1000;
    const date = new Date(clientDate);
    const day = date.getDay();
    const time = date.getHours();
    sortPosts[day][time] = sortPosts[day][time].concat(item.data);
  });

  return sortPosts;
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: groupPostsByWeekdayAndHour(action.payload) };

    case SET_ACTIVECELL:
      return { ...state, activeCell: action.payload };

    default: return state;
  }
}


export default rootReducer;
