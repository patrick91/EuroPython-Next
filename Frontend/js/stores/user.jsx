var ActionTypes = require('../consts/ActionTypes');

module.exports = function user(state={user: null}, action) {
    switch (action.type) {
    case ActionTypes.User.register:
        return {
            ...state,
            registration_error: false,
            registration_success: true,
        };
    case ActionTypes.User.registration_error:
        return {
            ...state,
            registration_error: true,
        };
    case ActionTypes.User.login:
        return {
            ...state,
            logged: true,
            token: action.token,
        };
    case ActionTypes.User.login_error:
        return {
            ...state,
            login_error: true,
        };
    default:
        return state;
    }
};
