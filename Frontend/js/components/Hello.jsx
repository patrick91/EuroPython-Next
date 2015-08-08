var React = require('react');

class Hello extends React.Component {
    constructor() {
        super();
        this.displayName = 'Hello';
    }

    render() {
        return <div>Hello React</div>;
    }
}

module.exports = Hello;
