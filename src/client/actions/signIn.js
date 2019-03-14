import {createActions} from 'redux-actions';

export const {
    signInUserRequest,
    signInUserSuccess,
    signInUserFailure
} = createActions(
    'SIGN_IN_USER_REQUEST',
    'SIGN_IN_USER_SUCCESS',
    'SIGN_IN_USER_FAILURE'
);