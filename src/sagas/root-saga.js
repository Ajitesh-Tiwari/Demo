import { fork } from 'redux-saga/effects';
import skillsSaga from './skills-saga';
import workSaga from './work-saga';
import educationSaga from './education-saga';

export default function* rootSaga() {
  yield [
    fork(skillsSaga),
    fork(workSaga),
    fork(educationSaga)];
}
