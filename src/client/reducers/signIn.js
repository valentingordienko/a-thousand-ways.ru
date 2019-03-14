import {handleActions} from 'redux-actions';//
import {signInUserRequest, signInUserSuccess, signInUserFailure} from '../actions/signIn';

export default handleActions(
    {
        [signInUserRequest]: () => false,
        [signInUserSuccess]: () => true,
        [signInUserFailure]: () => false,
    },
    false
)