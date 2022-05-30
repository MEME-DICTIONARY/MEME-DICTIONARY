const initialState = {
  isLogin: false,
  token:'',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'LOGIN':
    return { ...state, isLogin: action.payload.isLogin, token:action.payload.token };
  case 'LOGOUT':
    return { ...state, isLogin: action.payload, token:'' };
  default:
    return state;
  }
};

export default rootReducer;