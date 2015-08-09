var ActionTypes = require('../consts/ActionTypes');

module.exports = function user(state={user: null}, action) {
    switch (action.type) {
    case ActionTypes.User.register:
        return {
            logged: true,
        };
    case ActionTypes.User.registration_error:
        return {
            error: true,
        };
    default:
        return state;
    }
};
