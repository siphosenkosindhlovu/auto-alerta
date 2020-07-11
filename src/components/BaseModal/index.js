import React, { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import check from 'images/check-VB_Mesa de trabajo 1.svg';
import error from 'images/ic-error_Mesa de trabajo 1.svg';
import PropTypes from 'prop-types';
export default function BaseModal({
    title,
    dismissButtonText,
    isSuccess,
    children,
    show,
    handleClose,
    ...props
}) {
    return (
        <Modal show={show} onHide={handleClose} {...props} centered>
            <Modal.Header>
                <img
                    src={isSuccess ? check : error}
                    alt={isSuccess ? 'Success Icon' : 'Error Icon'}
                    style={{ width: '1.5rem', height: '1.5rem' }}
                    className="mr-3"
                />
                <Modal.Title className="text-primary">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{children}</Modal.Body>
            <Modal.Footer>
                <Button
                    variant="primary"
                    className="btn-lg btn-long"
                    onClick={handleClose}
                >
                    {dismissButtonText}
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
