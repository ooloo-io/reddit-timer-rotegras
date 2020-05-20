import {
  GROUP_POSTS, SET_ACTIVECELL,
} from '../constants/actionTypes';


const initialState = {
  groupedPosts: [],
  activeCell: { day: null, hour: null },
};


function groupPostsByWeekdayAndHour(items) {
  const sortPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));
  const TIME_TO_MILISECONDS = 1000;

  items.forEach((item) => {
    const itemDate = item.data.created_utc * TIME_TO_MILISECONDS;
    const date = new Date(itemDate);
    const day = date.getDay();
    const time = date.getHours();
    sortPosts[day][time] = sortPosts[day][time].concat(item.data);
  });

  return sortPosts;
}


function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GROUP_POSTS:
      return { ...state, groupedPosts: groupPostsByWeekdayAndHour(action.payload) };

    case SET_ACTIVECELL:
      return { ...state, activeCell: action.payload };

    default: return state;
  }
}


export default rootReducer;
