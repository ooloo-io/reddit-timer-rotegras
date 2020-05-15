import {
  SET_DATA,
  SET_ACTIVECELL,
} from '../constants/actionTypes';

export function setData(payload) {
  return { type: SET_DATA, payload };
}

export function setActiveCell(payload) {
  return { type: SET_ACTIVECELL, payload };
}
