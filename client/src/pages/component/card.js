import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import ListTicket from "./listTicket";
import { findTicketLike } from "../../_actions/ticket";

const MyCard = props => {
  const { findTicketrLike } = props;
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  console.log(props.ticket, "woi tiket");
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
              <div className="col-6">
                <div className="row">
                  <div className="col">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <b>Asal</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="jakarta"
                        style={{ height: "30px" }}
                        onChange={e => setStart(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-5">
                    {/*akan diubah ke tanggal segera (NOTE) */}
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>
                        <b>Tanggal</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="jakarta"
                        style={{ height: "30px" }}
                      />
                    </Form.Group>
                  </div>
                  <div className="col-2"></div>
                  <div className="col-5">
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label={<b>Pulang pergi</b>} />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-5">
                <div className="row">
                  <div className="col">
                    <Form.Group className="">
                      <Form.Label>
                        <b>Tujuan</b>
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Bandung"
                        style={{ height: "30px" }}
                        onChange={e => setEnd(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                </div>
                <div className="row">
                  <div className="col-4">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>
                        <b>Dewasa</b>
                      </Form.Label>
                      <Form.Control as="select">
                        {["", "", "", "", "", "", ""].map((item, i) => (
                          <option key={i}>{i}</option>
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
                      onClick={() => findTicketrLike(start, end)}
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
      <ListTicket list={props.ticket.data} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket
  };
};

const mapDispatchToProps = dispatch => {
  return {
    findTicketrLike: (start, end) => dispatch(findTicketLike(start, end))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCard);
