import React, { Fragment, Component, PureComponent } from 'react';
import { ENGINE_METHOD_DIGESTS } from 'constants';

class Simple extends PureComponent {
  render() {
    const { counter } = this.props;
    console.log('render simple');
    return (
    <div>
      {`Simple ${counter.value}`};
    </div>
    );
  };
};

const a = [0];
a.push(1);
// [0, 1];

let b = [0];
b = [...b, 1];
// [0, 1]

const StatelessComponent = props => {
  console.log('render StatelessComponent');
  console.log(props);
  return <div />;
};

StatelessComponent.defaultProps = {
  someProp: 1
};

export default class extends Component {
  state = {
    counter: { value: 0 }
  };
  componentDidMount() {
    setInterval(() => {
      const { counter } = this.state;
      this.setState({ counter: { value: counter.value + 1 } });
    }, 1000);
  }

  render() {
    const { counter } = this.state;
    console.log(counter);
    return (
      <Fragment>
        {/* <Simple counter={1} /> */}
        <StatelessComponent />
        {this.someCondition && <div>123</div>}
        {/* <Pure
          key={'asdadsa'}
          ref={c => (this.pure = c)}
          counter={counter}
        /> */}
      </Fragment>
    );
  }
};
