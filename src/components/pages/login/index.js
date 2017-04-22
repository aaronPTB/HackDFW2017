import React from 'react';
import { browserHistory } from 'react-router';
import { Form, FormGroup, FormControl, Col, Checkbox, Button, ControlLabel } from 'react-bootstrap';
import { post } from '../../../comm/comm'

//Going to be used with routes so it must be exported as a class
export default class Main extends React.Component {
  constructor() {
    super();
    this.requestLogin = this.requestLogin.bind(this);
    this.requestRegister = this.requestRegister.bind(this);
  }

  requestLogin() {
    const form = {
      username: this.email.value,
      password: this.password.value,
    }
    console.log(form);
    post("/login", form, response => {
      if (response.status == 'success') {
        browserHistory.push("/");
        console.log("success")
      }
      else {
        console.log("failed to sign in");
        console.log(response);
      }
    })
  }

  requestRegister() {
    const form = {
      username: this.email.value,
      password: this.password.value,
    }
    post("/auth/add-user", form, response => {
      if (response.status == 'success')
        this.requestLogin();
      else 
        console.log("failed registration attempt")
        console.log(response);
    })
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
                <FormControl type="email" placeholder="Email" inputRef={ref => { this.email = ref; }}/>
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl type="password" placeholder="Password" inputRef={ref => { this.password = ref; }}/>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button onClick={this.requestLogin}>
                  Sign in
                </Button>               
                <Button onClick={this.requestRegister}>
                  Register
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    )
  }
}
