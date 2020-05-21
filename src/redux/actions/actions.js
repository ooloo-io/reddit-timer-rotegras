import {
  GROUP_POSTS,
  SET_ACTIVECELL,
} from '../constants/actionTypes';

export function groupPosts(payload) {
  return { type: GROUP_POSTS, payload };
}

export function setActiveCell(payload) {
  return { type: SET_ACTIVECELL, payload };
}
