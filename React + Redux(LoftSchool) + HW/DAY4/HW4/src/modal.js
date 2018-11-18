import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
class Modal extends Component {
    render() {
        return ReactDOM.createPortal(
            this.props.children,
            document.getElementById('portal'),
        );
    };
};
export default Modal;