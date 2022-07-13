import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Login() {
  const [hideandshow, setHideandshow] = useState(false);
  const clickhide = () => {
    setHideandshow(true);
  };
  const clickhide2 = () => {
    setHideandshow(false);
  };

  // if (hideandshow == true) {
  //   '.hidediv'.style.display = 'none';
  // } else {
  //   '.hidediv'.style.display = 'none';
  // }

  return (
    <>
      <Form className={hideandshow ? 'hidediv' : 'favorite'}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control type="password" placeholder="Password" />
            <i class="fa fa-eye eyeicon" aria-hidden="true"></i>
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          LogIn
        </Button>
        <p>
          If you don't have an Account. Please
          <a
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              paddingLeft: '5px',
            }}
            onClick={() => {
              clickhide();
            }}
          >
            Sign Up
          </a>
        </p>
      </Form>

      <Form className={hideandshow ? 'favorite' : 'hidediv1'}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="Text" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Mobile No</Form.Label>
          <Form.Control type="text" placeholder="Enter Mobile No" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <div style={{ position: 'relative' }}>
            <Form.Control type="password" placeholder="Password" />
            <i class="fa fa-eye eyeicon" aria-hidden="true"></i>
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Confirm Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
        <p>
          If you Registored. Please
          <a
            style={{
              cursor: 'pointer',
              textDecoration: 'underline',
              paddingLeft: '5px',
            }}
            onClick={() => {
              clickhide2();
            }}
          >
            Login
          </a>
        </p>
      </Form>
    </>
  );
}

export default Login;
