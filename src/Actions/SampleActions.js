import {
    SampleActionTypes
} from '../ActionTypes/index';

const sampleActionOne = () => {
    return {
        type: SampleActionTypes.SAMPLE_ACTION_TYPE_1,
    };
};

const sampleActionTwo = () => {
    return {
       type: SampleActionTypes.SAMPLE_ACTION_TYPE_2,
    };
};

export {
    sampleActionOne,
    sampleActionTwo
};