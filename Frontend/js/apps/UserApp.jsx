var React = require('react');

var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

var RegistrationForm = require('../components/RegistrationForm');
var LoginForm = require('../components/user/LoginForm');

var userActions = require('../actions/user');


@connect(state => ({
    user: state.user,
}))
class UserApp extends React.Component {
    render() {
        const { user, dispatch } = this.props;

        const actions = bindActionCreators(userActions, dispatch);

        if (user.logged) {
            return <div>Hey</div>;
        }

        // TODO: if registration
        // return <RegistrationForm user={user} actions={actions} />;

        return <LoginForm user={user} actions={actions} />;
    }
}

module.exports = UserApp;
