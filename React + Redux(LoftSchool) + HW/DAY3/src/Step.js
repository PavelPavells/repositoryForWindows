import React, { PureComponent } from 'react';
import './Step.css';
import cx from 'classnames';

class Step extends PureComponent {
  handleClick = () => {
    if (this.props.isClickable) {
      this.props.onClick(this.props.number);
    }
  };
  render() {
    return (
      <div
        className={cx(
          'step',
          { 'step-clickable': this.props.isClickable },
          { 'step-selected': this.props.isSelected },
        )}
        onClick={this.handleClick}
      >
        <div className="step__number">{this.props.number}</div>
        <div className="step__title">{this.props.children}</div>
      </div>
    );
  }
}

export default Step;
