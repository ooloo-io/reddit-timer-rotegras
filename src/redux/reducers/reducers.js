import {
  SET_DATA, SET_ACTIVECELL,
} from '../constants/actionTypes';


const initialState = {
  data: [],
  activeCell: { day: null, hour: null },
};

function groupPostsByWeekdayAndHour(items) {
  const sortPosts = new Array(7).fill([]).map(() => new Array(24).fill([]));
  const timezoneDifference = () => new Date().getTimezoneOffset() * 60;

  items.forEach((item) => {
    const clientDate = (item.data.created_utc + timezoneDifference()) * 1000;
    const date = new Date(clientDate);
    const day = date.getDay();
    const time = Number((`0${date.getHours()}`).slice(-2));
    // eslint-disable-next-line
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
