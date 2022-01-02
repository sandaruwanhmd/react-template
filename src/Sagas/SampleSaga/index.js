import { takeLatest } from 'redux-saga/effects';
import { SampleActionTypes } from '../../ActionTypes';
import {
    getSampleCountAsync,
} from './SampleSaga';

const sampleSaga = [
  takeLatest(SampleActionTypes.SAMPLE_ACTION_TYPE_2, getSampleCountAsync),
];

export default sampleSaga;
