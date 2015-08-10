var React = require('react');

var Provider = require('react-redux').Provider;

var UserApp = require('../apps/UserApp');
var userStore = require('../stores/user');

var redux = require('redux');
var thunk = require('redux-thunk');

var reducer = redux.combineReducers({
    user: userStore,
});

const createStoreWithMiddleware = redux.applyMiddleware(thunk)(redux.createStore);
const store = createStoreWithMiddleware(reducer);

React.render(
    <Provider store={store}>
         {() => <UserApp />}
    </Provider>,
    document.querySelector('#content')
);
