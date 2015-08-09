var React = require('react');

var Form = require('react-formal');
var yup = require('yup');

var redux = require('redux');

var defaultStr = yup.string().default('');


var userSchema = yup.object({
    username: defaultStr.required('Please enter an username'),
    email: yup.string().email().required('Plese enter an email'),
    password: defaultStr.required('Please enter a password'),
});

class RegistrationForm extends React.Component {
    static propTypes = {
        actions: React.PropTypes.object.isRequired,
        user: React.PropTypes.object.isRequired,
    };

    constructor() {
        super();
    }

    register() {
        const user = this.state;

        this.props.actions.register(user.username, user.email, user.password);
    }

    render() {
        const form = <Form
          schema={userSchema}
          defaultValue={userSchema.default()}
          onChange={model => this.setState(model)}
          onSubmit={() => this.register()}
        >
          <div className="row">
            <label>Username</label>

            <Form.Field name='username' placeholder='Username'/>

            <Form.Message for={['username']}/>
          </div>
          <div className="row">
            <label>Email</label>

            <Form.Field name='email' placeholder='patrick@example.com'/>

            <Form.Message for={['email']}/>
          </div>
          <div className="row">
            <label>Password</label>

            <Form.Field name='password' type='password' placeholder='password'/>

            <Form.Message for={['password']}/>
          </div>

          <Form.Button type='submit'>Submit</Form.Button>
        </Form>;

        if (this.props.user.error) {
            return <div>
                <div>Error error</div>

                {form}
            </div>;
        }

        return form;
    }
}

module.exports = RegistrationForm;
