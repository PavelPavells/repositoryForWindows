import React, { Component } from 'react';

export class LifeCycle extends Component {
  static defaultProps = {};

  div = React.createRef();

  state = {};

  constructor(props) {
    super(props);
    console.log('constructor');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      creditCardInput: nextProps.creditCard.replace(/(\d{0,4})/g, '$1 ').trim()
    };
  }

  componentDidMount() {
    // console.log('componentDidMount');
    // console.log(this.div.current.getBoundingClientRect());
    // console.log(document.querySelector('#my-div').getBoundingClientRect());
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.creditCardInput !== nextState.creditCardInput
    // console.log('shouldComponentUpdate');
    // return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  // unsafe / deprecated

  // componentWillReceiveProps(nextProps) {
  //   this.props !== nextProps
  //   console.log('componentWillReceiveProps');
  // }

  // componentWillMount() {
  //   console.log('componentWillMount');
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   this.props !== nextProps
  //   this.state !== nextState
  //   console.log('componentWillUpdate');
  // }

  render() {
    const { creditCardInput } = this.state;

    return <div ref={this.div}>{creditCardInput}</div>;
  }
}

export default LifeCycle;
