import { LOGIN_USER, LOGOUT_USER } from '../types';

const initialState = {
  isAuth: false
  // user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return { isAuth: true };
    case LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};
