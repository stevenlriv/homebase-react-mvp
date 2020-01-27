import { db } from '../firebase/firebase';

const initState = db;

const firebaseReducer = (state = initState, action) => {
    return state;
}
export default firebaseReducer;
