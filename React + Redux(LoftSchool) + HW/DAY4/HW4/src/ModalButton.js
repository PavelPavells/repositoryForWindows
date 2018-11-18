import React, {Component} from 'react';
import Modal from './Modal';
class ModalButton extends Component {
    static displayName = 'Modal';
    state = {
        isModalShow : false,
    };
    hideModal = () => {
        this.setState({isModalShow : false});
    };
    showModal = () => {
        this.setState({isModalShow : true});
    };
    render() {
        const modal = (
            <div className="modal">
                <div className="modal__fog">
                    <div className="modal__body">
                        <h1>Модальное окно!</h1>
                        <button onClick={() => this.hideModal()}>Закрыть</button>
                    </div>
                </div>
            </div>
        );
        return(
            <div className="component-wrapper">
                <button onClick={this.showModal()}>Закрыть</button>
                {this.state.isModalShow && <Modal>{modal}</Modal>}
            </div>
        );
    };
};
export default ModalButton;