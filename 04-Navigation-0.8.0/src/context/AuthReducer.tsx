import {AuthState} from './AuthContext';

type AuthAction = {type: 'signIn'} | {type: 'changeFaviIcon'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {...state, isLoggedIn: true, username: 'no-username-yet'};
      break;

    case 'changeFaviIcon':
      return {...state, favoriteIcon: action.payload};
      break;

    default:
      return state;
  }
};
