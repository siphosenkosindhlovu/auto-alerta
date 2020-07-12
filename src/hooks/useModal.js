import { useState } from 'react';

export default function useModal() {
    const [isShown, setIsShown] = useState(false);
    const defaultProperties = {
        title: '',
        dismissButtonText: '',
        isSuccess: '',
        handleClose: '',
        bodyText: ''
    };
    const [modalProperties, setModalProperties] = useState(defaultProperties);
    function hideModal() {
        setIsShown(false);
    }
    function showModal({ title, dismissButtonText, bodyText, isSuccess, handleClose }) {
        setModalProperties({ title, dismissButtonText, bodyText, isSuccess, handleClose });
        setIsShown(true);
    }
    function toggleModal() {
        setIsShown(!isShown);
    }

    return {
        isShown,
        hideModal,
        showModal,
        toggleModal,
        modalProperties
    };
}
