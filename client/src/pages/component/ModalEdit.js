import React, { useState, useEffect, useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { approvePayment } from "../../_actions/order";
import { chooseTicket } from "../../_actions/order";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ModalEdit = props => {
  const [approve, setApprove] = useState(null);
  const inputLabel = useRef(null);
  const [labelWidth, setLabelWidth] = useState(0);

  useEffect(() => {
    if (inputLabel.current) {
      setLabelWidth(inputLabel.current.offsetWidth);
    }
  }, [inputLabel.current]);

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
                  placeholder={`${props.order?.chooseTicket?.ticket?.start?.location} - ${props.order?.chooseTicket?.ticket?.end?.location}`}
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
              <FormControl variant="outlined" className="w-100">
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Validasi
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={approve}
                  onChange={e => setApprove(e.target.value)}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"approved"}>approved</MenuItem>
                  <MenuItem value={"pending"}>pending</MenuItem>
                  <MenuItem value={"canceled"}>canceled</MenuItem>
                </Select>
              </FormControl>
            </form>
            <div className="col text-center mt-4">
              <Button
                className="w-25"
                onClick={() => {
                  props.approvePayment(props.id, approve);
                  window.location.reload();
                }}
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
