import { call, takeEvery, put } from 'redux-saga/effects';
import { GET_WORK_DATA } from "../actions/types";
import { setWorkData } from '../actions';
import { getWorkDetail } from '../api/work';

export const getWorkData = function*(action) {
  const skillData = yield call(getWorkDetail);
  yield put(setWorkData(skillData));
};

export default function* workSaga() {
  yield takeEvery(GET_WORK_DATA, getWorkData);
}
