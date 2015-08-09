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
                        console.log(res);
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
};
