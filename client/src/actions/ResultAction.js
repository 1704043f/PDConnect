import {
    TREATMENT_RESULTS,
    TRIAL_RESULTS,
    FOCUSGROUP_RESULTS
} from './types';


export const submitTrialResult = (arrTrial) => {
    console.log("submitting side effects info : ", arrTrial);

    return (dispatch) => {
        dispatch({
            type: TRIAL_RESULTS,
            payload: arrTrial
        })

    }
}

export const submitTreatmentResult = (arrTreatment) => {
    console.log("submitting side effects info : ", arrTreatment);

    return (dispatch) => {
        dispatch({
            type: TREATMENT_RESULTS,
            payload: arrTreatment
        })

    }
}

export const submitFocusGroupResult = (arrFocusGroup) => {
    console.log("submitting side effects info : ", arrFocusGroup);

    return (dispatch) => {
        dispatch({
            type: FOCUSGROUP_RESULTS,
            payload: arrFocusGroup
        })

    }
}