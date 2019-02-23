import { SET_WORK_DATA } from '../actions/types';

const workReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_WORK_DATA: {
      return action.data;
    }
    default:
      return state;
  }
};

export default workReducer;
