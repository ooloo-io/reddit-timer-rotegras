import {
  SET_DATA,
  SET_ACTIVECELL,
  SET_HOURPOSTS,
} from '../constants/actionTypes';

export function setData(payload) {
  return { type: SET_DATA, payload };
}

export function setActiveCell(payload) {
  return { type: SET_ACTIVECELL, payload };
}

export function setHourPosts(payload) {
  return { type: SET_HOURPOSTS, payload };
}
