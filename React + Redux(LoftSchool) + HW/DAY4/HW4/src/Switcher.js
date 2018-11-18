import React, {Component} from 'react';
import './Switcher.css';
// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName
class Switcher extends Component {
    state = {
        selectedChild : 0,
    }
    handleChangeChild = event => {
        const id = event.target.getAttribute('data-id');
        this.setState({selectedChild : Number(id)});
    };
    render() {
        const children = React.Children.toArray(this.props.children);
        return(
            <div>
        <nav>
          <ul className="component-list">
            {children.map((child, index) => {
              return (
                <li
                  className="component-list__name"
                  data-id={index}
                  key={index}
                  onClick={this.handleChangeChild}
                >
                  {child.type.displayName || child.type.name}
                </li>
              );
            })}
          </ul>
        </nav>
        {children[this.state.selectedChild]}
      </div>
        );
    };
};
export default Switcher;