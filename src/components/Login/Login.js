import React from "react";
import { connect } from "react-redux";
import * as loginActionCreator from "../../actions/login";
import { Button, Form, Container, Row, Col, Card } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col xs={1} md={4}></Col>
          <Col>
            <img
              width={75}
              height={75}
              className="mr-3"
              src="/logo192.png"
              alt=""
            />
            <h1>PointAverage</h1>
          </Col>
          <Col xs={1} md={4}></Col>
        </Row>

        <Container>
          <Row className="show-grid">
            <Col xs={1} md={4}></Col>
            <Col xs={4} md={4}>
              <div class="shadow p-3 mb-5 bg-white rounded">
                <Card style={{ width: "18rem", border: "none" }}>
                  <Card.Body>
                    <Card.Title>Sign in</Card.Title>
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
                      <Button
                        variant="primary"
                        onClick={() => this.handleSubmit()}
                      >
                        Submit
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col xs={1} md={4}></Col>
          </Row>
        </Container>
      </Container>
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
