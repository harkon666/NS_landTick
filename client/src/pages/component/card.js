import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import ListTicket from "./listTicket";
import { getStation } from "../../_actions/station";
import { findTicketLike } from "../../_actions/ticket";

import TextField from "@material-ui/core/TextField";

import SyncAltRoundedIcon from "@material-ui/icons/SyncAltRounded";
const MyCard = (props) => {
  const { findTicketrLike } = props;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [date, setDate] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    props.getStation();
  }, []);

  const tanggal = new Date();
  return (
    <>
      <Card
        style={{ bottom: "60px", position: "relative" }}
        className="shadow pr-5"
      >
        <div className="row">
          <div className="col-3 bg-light">
            <Card.Body>
              <div className="row">
                <div className="col bg-white">Tiket Kereta Api</div>
              </div>
            </Card.Body>
          </div>
          <div className="col">
            <div className="row mt-2">
              <div className="col">
                <h3>Tiket Kereta Api</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <b>Asal</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        list="lokasi-awal"
                        placeholder="...jakarta"
                        value={start}
                        style={{ height: "30px" }}
                        onChange={(e) => setStart(e.target.value)}
                      />
                      <datalist id="lokasi-awal">
                        {props.station.data.map((item, i) => (
                          <option key={i} value={item.location}>
                            {item.location}
                          </option>
                        ))}
                      </datalist>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <b>Tanggal</b>
                      </Form.Label>
                      <TextField
                        id="date"
                        type="date"
                        defaultValue={`${tanggal.getFullYear()}-0${
                          tanggal.getMonth() + 1
                        }-${tanggal.getDate()}`}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-2">
                <div className="container">
                  <Button
                    className="mt-4"
                    block
                    onClick={() => {
                      let temp = start;
                      setStart(end);
                      setEnd(temp);
                    }}
                  >
                    <SyncAltRoundedIcon />
                  </Button>
                </div>
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col">
                    <Form.Group className="">
                      <Form.Label>
                        <b>Tujuan</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="...Bandung"
                        value={end}
                        style={{ height: "30px" }}
                        list="lokasi-tujuan"
                        onChange={(e) => setEnd(e.target.value)}
                      />
                      <datalist id="lokasi-tujuan">
                        {props.station.data.map((item, i) => (
                          <option key={i} value={item.location}>
                            {item.location}
                          </option>
                        ))}
                      </datalist>
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>
                        <b>Dewasa</b>
                      </Form.Label>
                      <Form.Control
                        as="select"
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {["", "", "", "", "", "", ""].map((item, i) => (
                          <option value={i + 1} key={i}>
                            {i + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="col-4">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>
                        <b>Bayi</b>
                      </Form.Label>
                      <Form.Control as="select">
                        {["", "", "", "", "", "", ""].map((item, i) => (
                          <option key={i}>{i}</option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </div>
                  <div className="col-4">
                    <Button
                      style={{ marginTop: "32px" }}
                      onClick={() => findTicketrLike(start, end, date)}
                    >
                      <b>Cari</b>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <ListTicket list={props.ticket.data} quantity={quantity} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    ticket: state.ticket,
    station: state.station,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    findTicketrLike: (start, end, date) =>
      dispatch(findTicketLike(start, end, date)),
    getStation: () => dispatch(getStation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
