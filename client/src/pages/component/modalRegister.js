import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../_actions/auth";
import { Modal, Form, Row, Col } from "react-bootstrap";

function ModalRegister(props) {
  const { userLogin, login } = props;
  const [registers, setRegister] = useState({
    name: "",
    username: "",
    Register: "",
    password: "",
    gender: "",
    phone: "",
    address: ""
  });

  return (
    <Modal
      {...props}
      size="lg"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="text-center">
        <>
          <h1 class="text-primary">Register</h1>
          <p className="text-danger"></p>
        </>
        <Form>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Name"
                type="text"
                value={registers.name}
                onChange={e =>
                  setRegister({ ...registers, name: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Username"
                type="text"
                value={registers.username}
                onChange={e =>
                  setRegister({ ...registers, username: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="email"
                type="Register"
                value={registers.email}
                onChange={e =>
                  setRegister({ ...registers, email: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Password"
                type="password"
                value={registers.password}
                onChange={e =>
                  setRegister({ ...registers, password: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Gender"
                type="text"
                value={registers.gender}
                onChange={e =>
                  setRegister({ ...registers, gender: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="phone"
                type="text"
                value={registers.phone}
                onChange={e =>
                  setRegister({ ...registers, phone: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Address"
                type="text"
                value={registers.address}
                onChange={e =>
                  setRegister({ ...registers, address: e.target.value })
                }
              />
            </Col>
          </Row>
        </Form>
        <button
          className="btn btn-primary"
          onClick={() => {
            props.register(register);
          }}
          style={{ width: "25%" }}
        >
          Login
        </button>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    register: register => dispatch(register(register))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
