const getToken = state => state.auth.token;
const getuserEmail = state => state.auth.user.email;

export default { getToken, getuserEmail };
