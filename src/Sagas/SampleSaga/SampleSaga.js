import { put } from 'redux-saga/effects';
import { SampleActionTypes } from '../../ActionTypes';

function* getSampleCountAsync({}) {
  try {
    yield put({ type: SampleActionTypes.SAMPLE_ACTION_TYPE_1_SUCCESS, payload: 100 });
  } catch (error) {
  }
}

export {
    getSampleCountAsync,
};
