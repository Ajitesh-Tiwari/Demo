import { SET_SKILLS_DATA } from '../actions/types';

const skillsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_SKILLS_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export default skillsReducer;
