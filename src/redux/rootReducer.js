const initialState = {
    isLogin: false,
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLogin: action.payload };
        case "LOGOUT":
            return { ...state, isLogin: action.payload };
        default:
            return state;
    }
};

export default rootReducer;