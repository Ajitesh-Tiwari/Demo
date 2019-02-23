import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_SKILLS_DATA } from "../actions/types";
import { setSkillsData } from '../actions';
import { getSkillsDetail } from '../api/skills';

export const getSkillsData = function*(action) {
  const skillData = yield call(getSkillsDetail);
  yield put(setSkillsData(skillData));
};

export default function* skillsSaga() {
  yield takeEvery(GET_SKILLS_DATA, getSkillsData);
}
