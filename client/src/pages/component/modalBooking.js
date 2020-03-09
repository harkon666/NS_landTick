import React from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const ModalBooking = props => {
  return (
    <Modal
      {...props}
      size="lg"
      animation={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <h3>
          Ticket anda berhasil ditambahkan, silahkan segera melakukan pembayaran
          Klik{" "}
          <Link to="/my-ticket">
            <b>Disini</b>
          </Link>
        </h3>
      </Modal.Body>
    </Modal>
  );
};

export default ModalBooking;
