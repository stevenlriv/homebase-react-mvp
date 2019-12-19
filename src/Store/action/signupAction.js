import { myFirebase } from "../firebase/firebase";

export const signUpEmail = data => {
    var user = JSON.stringify(data)
    return (dispatch, getState) => {
        dispatch( {
            type: 'CREATE_USER',
            user
        })
        return Promise.resolve()
    }
}
