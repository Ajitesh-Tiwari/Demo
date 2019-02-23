import { SET_EDUCATION_DATA } from '../actions/types';

const educationReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_EDUCATION_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export default educationReducer;
