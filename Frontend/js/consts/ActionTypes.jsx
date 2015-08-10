var keyMirror = require('react/lib/keyMirror');

module.exports = {
    User: keyMirror({
        register: null,
        registration_error: null,

        login: null,
        login_error: null,
    }),
};
