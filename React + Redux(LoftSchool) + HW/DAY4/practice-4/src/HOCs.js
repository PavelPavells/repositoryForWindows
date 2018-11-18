import React, { PureComponent, Component } from 'react';

let Stateless = () => {
  console.log('Stateless render');
  return <p>I'm simple stateless component</p>;
};

const pureHOC = WrappedComponent =>
  class extends PureComponent {
    static displayName = 'PureHOC';
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

const PureStateless = pureHOC(Stateless);

export class HOCs extends Component {
  state = {
    counter: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        counter: state.counter + 1,
      }));
    }, 1000);
  }

  render() {
    return <PureStateless />;
  }
}

export default HOCs;
