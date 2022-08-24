import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const FormCom = () => {
  //const [message, setMessage] = useState('');
  const [inputValues, setInputValues] = useState({});

  const InfoFormChange = (e) => {
    setInputValues((inputValues) => ({
      ...inputValues,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('dataKey', JSON.stringify(inputValues));
  }, [inputValues]);

  // const handleChange = (event) => {
  //   setMessage(event.target.value);
  // };
  // const keypress = (event) => {
  //   if (event.key === 'Enter') {
  //     alert(message);
  //     setMessage('');
  //   }
  // };
  const clickbutton = () => {
    //alert(inputValues.name + ' ' + inputValues.email);
    setInputValues('');
  };

  console.log(inputValues);
  return (
    <>
      <Row className="mx-0 my-3">
        <Col lg={4} className="mx-auto">
          <input
            className="form-control mb-2"
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Enter you Name"
            onChange={InfoFormChange}
            //onKeyPress={keypress}
            value={inputValues ? inputValues.name : ''}
          />
          <input
            className="form-control mb-2"
            type="text"
            name="email"
            placeholder="Enter you Email"
            onChange={InfoFormChange}
            autoComplete="off"
            value={inputValues ? inputValues.email : ''}
          />
          <input
            className="form-control mb-2"
            type="text"
            name="password"
            autoComplete="off"
            placeholder="Enter you Password"
            onChange={InfoFormChange}
            value={inputValues ? inputValues.password : ''}
          />
          <input
            className="form-control mb-2"
            type="text"
            placeholder="Enter you Confirm Password"
          />

          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">Facebook</option>
            <option value="2">Twitter</option>
            <option value="3">LinkedIn</option>
            <option value="3">Google</option>
          </Form.Select>
          {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3 mt-2">
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
          <h5>Name : {inputValues.password}</h5>
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
