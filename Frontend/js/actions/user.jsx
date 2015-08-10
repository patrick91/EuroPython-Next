var ActionTypes = require('../consts/ActionTypes');
var Conf = require('../consts/Configuration');

var request = require('superagent');
var prefix = require('superagent-prefix')(Conf.BASE_API_URL);

module.exports = {
    register: function(username, email, password) {
        return (dispatch, getState) => {
            request
                .post('/users/')
                .send({
                    username: username,
                    email: email,
                    password: password,
                })
                .use(prefix)
                .end(function(err, res) {
                    if (err) {
                        dispatch({
                            type: ActionTypes.User.registration_error,
                            res,
                        });
                    } else {
                        dispatch({
                            type: ActionTypes.User.register,
                            username,
                        });
                    }
                });
        };
    },
    login: function(username, password) {
        return (dispatch, getState) => {
            request
                .post('/api-token-auth/')
                .send({
                    username: username,
                    password: password,
                })
                .use(prefix)
                .end(function(err, res) {
                    if (err) {
                        dispatch({
                            type: ActionTypes.User.login_error,
                            res,
                        });
                    } else {
                        var token = res.body.token;

                        dispatch({
                            type: ActionTypes.User.login,
                            token,
                        });
                    }
                });
        };
    },
};
