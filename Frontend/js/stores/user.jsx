var ActionTypes = require('../consts/ActionTypes');

module.exports = function user(state={user: null}, action) {
    switch (action.type) {
    case ActionTypes.User.register:
        return {
            registered: true,
        };
    case ActionTypes.User.registration_error:
        return {
            error: true,
        };
    case ActionTypes.User.login:
        return {
            ...user,
            logged: true,
            token: action.token,
        };
    case ActionTypes.User.login_error:
        return {
            error: true,
        };
    default:
        return state;
    }
};
