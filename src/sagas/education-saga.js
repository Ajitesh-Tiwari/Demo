import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_EDUCATION_DATA } from "../actions/types";
import { setEducationData } from '../actions';
import { getEducationDetail } from '../api/education';

export const getEducationData = function*(action) {
  const educationData = yield call(getEducationDetail);
  yield put(setEducationData(educationData));
};

export default function* skillsSaga() {
  yield takeEvery(GET_EDUCATION_DATA, getEducationData);
}
