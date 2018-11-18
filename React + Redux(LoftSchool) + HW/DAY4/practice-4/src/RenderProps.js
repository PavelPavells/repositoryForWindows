import React, { PureComponent } from 'react';

class WithWindowSize extends PureComponent {
  state = {
    width: window.innerWidth,
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    return this.props.render(width);
  }
}

function WithWindowSizeHOC(WrappedComponent) {
  return class extends PureComponent {
    state = {
      width: window.innerWidth,
    };

    componentDidMount() {
      window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.onResize);
    }

    onResize = () => {
      this.setState({ width: window.innerWidth });
    };

    render() {
      const { width } = this.state;
      return React.createElement(WrappedComponent, {
        ...this.props,
        width,
      });
    }
  };
}

const P = ({ width }) => (
  <p style={{ color: 'red' }}>{width}</p>
);

const PWithWidth = WithWindowSizeHOC(P);

export default () => (
  <div>
    <h1>Ширина окна:</h1>
    <WithWindowSize
      render={width => (
        <p style={{ color: 'red' }}>{width}</p>
      )}
    />
    <PWithWidth />
  </div>
);
