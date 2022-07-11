import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Login from './Login';

function LoginResiter() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <a
        variant="primary"
        onClick={handleShow}
        style={{ cursor: 'pointer', marginRight: '8px' }}
      >
        Login & Register
      </a>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login & Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Login />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginResiter;
