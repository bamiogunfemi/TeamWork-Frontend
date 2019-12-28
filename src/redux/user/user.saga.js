import {takeLatest, put, all, call} from 'redux-saga/effects'
import UserActionTypes from './user.types'
import {SignInFailure, 
        SignInSucces,
        SignOutSuccess,
        SignOutFailure,
        SignUpSuccess,
        SignUpFailure} from './user.action'
import axios from 'axios'

export function* signUp ({payload: {firstName, lastName, password, email, confirmPassword, jobRole, gender, address}}) {
  try {
    const fetchApi = axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/create-user`, {payload});
    const res = fetchApi.then(res=> res.data) 
   
    yield put(SignUpSuccess({ res}));
  }
  catch(error){
   yield put(SignUpFailure(error))
  }
}
