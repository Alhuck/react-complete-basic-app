import React, {useState} from 'react';
import Modal from 'react-modal';

const ErrorModal = (props) => {

    const [isModalOpen, setIsOpen] = useState(false);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };

    Modal.setAppElement('body');
    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
    }

    props.onShowModal(openModal);


    return (
        <Modal
          isOpen={isModalOpen}
        //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Error Modal"
        >

          <h2>User Details</h2>
          <button onClick={closeModal}>close</button>
          <div>{props.labelMsg}</div>
          
        </Modal>
    )
}

export default ErrorModal;

