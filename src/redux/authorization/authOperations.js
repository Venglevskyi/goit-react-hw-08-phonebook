import AuthActions from './authActions';

const baseUrl = 'https://goit-phonebook-api.herokuapp.com/users';
const setHeaders = headers => {
  return {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZThiMTRkM2MzNWY3ODAwMTc4ZDIzZjIiLCJpYXQiOjE1ODYxNzMxMzl9.r4SYBtLre0QOTAzenRRY0vSBw39RaPzGFE9RBV7XHOQ',
    ...headers,
  };
};

const register = (name, email, password) => dispatch => {
  dispatch(AuthActions.registerRequest());

  const user = {
    name,
    email,
    password,
  };
  const option = {
    method: 'POST',
    headers: setHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(user),
  };

  fetch(`${baseUrl}/signup`, option)
    .then(response => console.log(response.json()))
    .then(data => dispatch(AuthActions.registerSuccess(data)))
    .catch(error => dispatch(AuthActions.registerError(error)));
};

export default { register };
