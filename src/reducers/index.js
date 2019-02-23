import { combineReducers } from 'redux';
import skillsReducer from './skills-reducer';
import workReducer from './work-reducer';
import educationReducer from './education-reducer';

export const reducers = {
  skills: skillsReducer,
  work: workReducer,
  education: educationReducer
};

export default combineReducers(reducers);
