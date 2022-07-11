import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function SignUp() {
  return (
    <Form>
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
    </Form>
  );
}

export default SignUp;
