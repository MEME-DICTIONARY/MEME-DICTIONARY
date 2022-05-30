export const setLogin = (token) => ({
  type: 'LOGIN',
  payload: {
    isLogin:true,
    token:token,
  },
})

export const setLogout = () => ({
  type: 'LOGOUT',
  payload: false,
})