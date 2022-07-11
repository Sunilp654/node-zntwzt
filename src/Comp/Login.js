import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

function Login() {
  return (
    <Form>
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
    </Form>
  );
}

export default Login;
