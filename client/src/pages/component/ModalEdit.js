import React, { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { approvePayment } from "../../_actions/order";
import { chooseTicket } from "../../_actions/order";

const ModalEdit = props => {
  const [approve, setApprove] = useState("approved");
  useEffect(() => {
    if (props.id) {
      props.chooseTicket(props.id);
    }
  }, [props.id]);
  console.log(props.order, "woi asu");
  if (props.id) {
    return (
      <Modal
        {...props}
        size="lg"
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h2 className="text-center text-primary">Approve Payment</h2>
          <div className="container mt-3">
            <form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder={props.id} disabled />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder={props.order?.chooseTicket?.user?.name}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder={`${props.order?.chooseTicket?.ticket?.startStation}-${props.order?.chooseTicket?.ticket?.destinationStation}`}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control
                  type="text"
                  placeholder={props.order?.chooseTicket?.attachment}
                  disabled
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" value={approve} />
              </Form.Group>
            </form>
            <div className="col text-center mt-4">
              <Button
                className="w-25"
                onClick={() => props.approvePayment(props.id, approve)}
              >
                Save
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <></>;
  }
};

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    approvePayment: (id, status) => dispatch(approvePayment(id, status)),
    chooseTicket: id => dispatch(chooseTicket(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEdit);
