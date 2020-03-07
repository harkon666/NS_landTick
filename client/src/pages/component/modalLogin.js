import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../_actions/auth";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function ModalLogin(props) {
  const { auth, login } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkLogin = (email, password) => {
    if (!auth.data.message == "Wrong Email" || "Wrong Password") {
      return login(email, password);
    } else {
      return auth.data.message;
    }
  };

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
          <h1 class="text-primary">Login</h1>
          {!auth.data.message == "Wrong Email" || "Wrong Password" ? (
            <p className="text-danger">{auth.data.message}</p>
          ) : (
            <p className="text-danger">{auth.data.message}</p>
          )}
        </>
        <Form>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="mx-5 my-3">
            <Col>
              <Form.Control
                placeholder="Password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </Col>
          </Row>
        </Form>
        <Link to="/">
          <button
            className="btn btn-primary"
            onClick={() => {
              checkLogin(email, password);
            }}
            style={{ width: "25%" }}
          >
            Login
          </button>
        </Link>
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
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalLogin);
