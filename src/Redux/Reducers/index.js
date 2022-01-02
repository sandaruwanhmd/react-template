import { combineReducers } from 'redux';
import SampleReducer from './SampleReducer';

const rootReducer = combineReducers({
    sample: SampleReducer,
});

export default rootReducer;