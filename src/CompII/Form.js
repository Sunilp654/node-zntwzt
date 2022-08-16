import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const FormCom = () => {
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
        <Col lg={4} className="mx-auto">
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you Name"
            onChange={handleChange}
            onKeyPress={keypress}
            value={message}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you Email"
            onChange={handleChange}
            onKeyPress={keypress}
            value={message}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you Password"
            onChange={handleChange}
            onKeyPress={keypress}
            value={message}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you Confirm Password"
            onChange={handleChange}
            onKeyPress={keypress}
            value={message}
          />

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Facebook</option>
            <option value="2">Twitter</option>
            <option value="3">LinkedIn</option>
            <option value="3">Google</option>
          </Form.Select>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3 mt-3">
              <Form.Check
                inline
                label="Yes"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="No"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
            </div>
          ))}

          <label className="w-100 mb-2">
            <input type="checkbox" /> Save as User
          </label>
          <button
            className="btn btn-dark mb-2"
            onClick={() => {
              clickbutton();
            }}
          >
            Save
          </button>
        </Col>

        <Col lg={4} className="mx-auto">
          <h5>Name : </h5>
          <h5>Email : </h5>
          <h5>Password : </h5>
          <h5>Save as User YES/NO : </h5>
          <h5>YES/NO : </h5>
        </Col>
      </Row>
    </>
  );
};
export default FormCom;
