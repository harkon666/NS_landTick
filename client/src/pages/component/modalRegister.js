import React, { useState } from "react";
import { connect } from "react-redux";
import { register } from "../../_actions/auth";
import { Modal, Form, Row, Col } from "react-bootstrap";

function ModalRegister(props) {
  const [registers, setRegister] = useState({
    name: "",
    identity: "",
    email: "",
    password: "",
    gender: "male",
    phone: "",
    address: ""
  });

  return (
    <Modal
      {...props}
      size="md"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <>
          <h1 class="text-primary">Register</h1>
          <p className="text-danger"></p>
        </>
        <Form>
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>Nama</b>
              </Form.Label>
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
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>No Identitas</b>
              </Form.Label>
              <Form.Control
                placeholder="identity"
                type="text"
                value={registers.identity}
                onChange={e =>
                  setRegister({ ...registers, identity: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>Email</b>
              </Form.Label>
              <Form.Control
                placeholder="email"
                type="text"
                value={registers.email}
                onChange={e =>
                  setRegister({ ...registers, email: e.target.value })
                }
              />
            </Col>
          </Row>
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>Password</b>
              </Form.Label>
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
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>Jenis Kelamin</b>
              </Form.Label>
              <Form.Control
                as="select"
                onChange={e =>
                  setRegister({ ...registers, gender: e.target.value })
                }
              >
                <option value="male">male</option>
                <option value="female">female</option>
              </Form.Control>
              {console.log(registers.gender, "woi")}
            </Col>
          </Row>
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>No Handphone</b>
              </Form.Label>
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
          <Row className="mx-3 my-3">
            <Col>
              <Form.Label>
                <b>Alamat</b>
              </Form.Label>
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
        <div className="container text-center">
          <button
            className="btn btn-primary"
            onClick={() => {
              props.register(registers);
            }}
            style={{ width: "25%" }}
          >
            Login
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: load => dispatch(register(load))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalRegister);
