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
        } else {
            return <div>
                <h1>Login</h1>
                <LoginForm user={user} actions={actions} />
                <h1>Or register</h1>
                <RegistrationForm user={user} actions={actions} />
            </div>;
        }

        return ;
    }
}

module.exports = UserApp;
