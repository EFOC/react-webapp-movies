import React, { useState } from 'react';
import ModalList from './ModalList';
import Hamburger from 'hamburger-react';


const HeaderListModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    // Find out how to open modal onclick
    function toggle() {
        setModalOpen(!modalOpen ? true : false);
    }

    return (
        <div id="header-menu-button">
            <ModalList isOpen={modalOpen} toggle={toggle}/>
            <div onClick={toggle}>
                <Hamburger size={10} />
                <p>Menu</p>
            </div>
        </div>
    )
}

export default HeaderListModal;