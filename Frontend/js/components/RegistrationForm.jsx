var React = require('react');

var Form = require('react-formal');
var yup = require('yup');

var defaultStr = yup.string().default('');


var userSchema = yup.object({
    username: defaultStr.required('Please enter an username'),
    email: yup.string().email().required('Plese enter an email'),
    password: defaultStr.required('Please enter a password'),
});

class RegistrationForm extends React.Component {
    render() {
        return <Form
          schema={userSchema}
          defaultValue={userSchema.default()}
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
    }
}

module.exports = RegistrationForm;
