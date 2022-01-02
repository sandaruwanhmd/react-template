import { all } from 'redux-saga/effects';
import SampleSaga from './SampleSaga';

export default function* rootSaga() {
  yield all([...SampleSaga]);
}
