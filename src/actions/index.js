import {
  GET_SKILLS_DATA, SET_SKILLS_DATA,
  GET_EDUCATION_DATA, SET_EDUCATION_DATA,
  GET_WORK_DATA, SET_WORK_DATA
} from './types';

export const getSkillsData = () => {
  return {
    type: GET_SKILLS_DATA
  };
};

export const setSkillsData = data => {
  return {
    type: SET_SKILLS_DATA,
    data
  };
};

export const getEducationData = () => {
  return {
    type: GET_EDUCATION_DATA
  };
};

export const setEducationData = data => {
  return {
    type: SET_EDUCATION_DATA,
    data
  };
};

export const getWorkData = () => {
  return {
    type: GET_WORK_DATA
  };
};

export const setWorkData = data => {
  return {
    type: SET_WORK_DATA,
    data
  };
};
