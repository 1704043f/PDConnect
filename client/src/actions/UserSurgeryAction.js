import {
    USER_SURGERY
} from './types';


export const submitUserSurgery = (objUserSurgery, objUserTrack, objUserAnswerNone) => {
    console.log("submitting user surgery : ", objUserSurgery);

    return (dispatch) => {
        dispatch({
            type: USER_SURGERY,
            payload: {surgery: objUserSurgery, track: objUserTrack, answerNone: objUserAnswerNone}
        })
    }
}