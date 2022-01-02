import { SampleActionTypes } from '../../ActionTypes';

const INITIAL_STATE = {
    count: 0,
};

const SampleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SampleActionTypes.SAMPLE_ACTION_TYPE_1:
            return {
                ...state, count: state.count + 1,
            };
        case SampleActionTypes.SAMPLE_ACTION_TYPE_2:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default SampleReducer;