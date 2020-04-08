import authActions from './authActions';

const baseUrl = 'https://goit-phonebook-api.herokuapp.com/users';
const setOption = user => {
  return {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  };
};
const setToken = token => {
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  };
};

const register = user => dispatch => {
  dispatch(authActions.registerRequest());

  fetch(`${baseUrl}/signup`, setOption(user))
    .then(response => response.json())
    .then(data => dispatch(authActions.registerSuccess(data)))
    .catch(error => dispatch(authActions.registerError(error)));
};

const logIn = user => dispatch => {
  dispatch(authActions.loginRequest());

  fetch(`${baseUrl}/login`, setOption(user))
    .then(response => response.json())
    .then(data => dispatch(authActions.loginSuccess(data)))
    .catch(error => dispatch(authActions.loginError(error)));
};

const logOut = token => dispatch => {
  dispatch(authActions.logoutRequest());

  const option = {
    method: 'POST',
    headers: setToken(token),
  };

  fetch(`${baseUrl}/logout`, option)
    .then(response => response.json())
    .then(() => dispatch(authActions.logoutSuccess()))
    .catch(error => dispatch(authActions.logoutError(error)));
};

const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  dispatch(authActions.getCurrentUserRequest());
  const option = {
    method: 'GET',
    headers: setToken(persistedToken),
  };

  fetch(`${baseUrl}/current`, option)
    .then(response => response.json())
    .then(data => dispatch(authActions.getCurrentUserSuccess(data)))
    .catch(error => dispatch(authActions.getCurrentUserError(error)));
};

export default { register, logIn, logOut, getCurrentUser };
