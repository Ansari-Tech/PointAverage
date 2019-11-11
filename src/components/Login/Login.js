import React from "react";
import { connect } from "react-redux";
import * as loginActionCreator from "../../actions/login";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit = () => {
    console.log("Submitting...");
    this.props.loginRequest({
      username: this.state.email,
      password: this.state.password
    });
  };
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" onClick={() => this.handleSubmit()}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loginRequest: credentials => {
      dispatch(loginActionCreator.loginRequest(credentials));
    }
  };
};

export default connect(
  null,

  mapDispatchToProps
)(Login);
