import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Form = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  const keypress = (event) => {
    if (event.key === 'Enter') {
      alert(message);
      setMessage('');
    }
  };
  const clickbutton = () => {
    alert(message);
    setMessage('');
  };
  return (
    <>
      <Row className="mx-0 my-3">
        <Col lg={4} className="mx-auto text-center">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you text"
            onChange={handleChange}
            onKeyPress={keypress}
            value={message}
          />
          <button
            className="btn btn-dark mb-2"
            onClick={() => {
              clickbutton();
            }}
          >
            Save
          </button>
        </Col>
      </Row>
    </>
  );
};
export default Form;
