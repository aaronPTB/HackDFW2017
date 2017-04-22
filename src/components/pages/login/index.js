import React from 'react';
import { Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel } from 'react-bootstrap';

//Going to be used with routes so it must be exported as a class
export default class Main extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="page login">
        <div id="login-field">
          <Form horizontal>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl type="email" placeholder="Email" />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">
                  Sign in
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}
