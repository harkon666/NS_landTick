import React, { useState, useEffect } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addPassenger } from "../_actions/passenger";
import { getTicket } from "../_actions/ticket";
import { thisUser } from "../_actions/user";
import { myTicket, chooseTicket } from "../_actions/order";
import { Link, Redirect } from "react-router-dom";

const MyTicket = ({
  thisUser,
  myTicket,
  order,
  addPassenger,
  chooseTicket,
  user,
}) => {
  const [step, setStep] = useState(false);
  const [idTicket, setIdTicket] = useState(null);
  const [passenger, setPassenger] = useState({});

  useEffect(() => {
    thisUser();
    myTicket();
  }, []);

  const fixDate = (item) => {
    const param = item.split("-");
    const date = new Date(item);
    const option = { month: "long" };
    let res = new Intl.DateTimeFormat("en-US", option).format(date);
    let month = res.split(" ");
    return `${param[2]} ${month} ${param[0]}`;
  };

  const dayName = (item) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const day = new Date(item);
    return days[day.getDay()];
  };

  const totalInput = (num) => {
    let qty = [];
    for (let i = 0; i < num; i++) {
      qty.push("");
    }

    return qty;
  };
  const myTickets = order.myTicket;

  console.log(user.data, "woi ckuaks");
  if (!step) {
    return (
      <>
        {user.data.length === 0 ? <Redirect to={{ pathname: "/" }} /> : null}
        <div className="container mt-5">
          <h2>Ticket Saya</h2>
        </div>
        {myTickets.map((item, i) => (
          <div className="container mb-5 px-5 mt-5 mr-5" key={item.id}>
            <div className="container px-5">
              {/* ini untuk component */}
              <Card className="mt-5" border="dark">
                <Card.Body>
                  <div className="row">
                    <div className="col-3">
                      <h2 className="text-primary">LandTick</h2>
                    </div>
                    <div className="col-9 text-right">
                      <h2>Kereta Api</h2>
                      <p>
                        <b>{dayName(item.ticket.dateStart)}, </b>{" "}
                        {fixDate(item.ticket.dateStart)}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2">
                      <h3>{item.ticket.nameTrain}</h3>
                      <p>{item.ticket.type.name}</p>
                      {item.status === "pending" ? (
                        <p className="text-warning">Pending</p>
                      ) : item.status === "approved" ? (
                        <p className="text-success">Approved</p>
                      ) : (
                        <p className="text-danger">Cancled</p>
                      )}
                    </div>
                    <div className="col-3">
                      <div className="row">
                        <div className="col-1">|||||</div>
                        <div className="col-8">
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <h4>{item.ticket.startTime}</h4>
                              </div>
                              <div className="row">
                                <p>{fixDate(item.ticket.dateStart)}</p>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <div className="row">
                                <h4>{item.ticket.arrivalTime}</h4>
                              </div>
                              <div className="row">
                                <p>{fixDate(item.ticket.dateStart)}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <h4>{item.ticket.start.location}</h4>
                          </div>
                          <div className="row">
                            <p>
                              {item.ticket.start.station} (
                              {item.ticket.start.code})
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <h4>{item.ticket.end.location}</h4>
                          </div>
                          <div className="row">
                            <p>
                              {item.ticket.end.station} ({item.ticket.end.code})
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="row mb-1">
                        <div className="col">No. Tanda Pengenal</div>
                        <div className="col">Nama Pemesan</div>
                        <div className="col">No. Handphone</div>
                        <div className="col">Email</div>
                      </div>
                      <div className="row border-top">
                        <div className="col">
                          <p>{item.user.identity}</p>
                        </div>
                        <div className="col">
                          <p>{item.user.name}</p>
                        </div>
                        <div className="col">
                          <p>{item.user.phone}</p>
                        </div>
                        <div className="col">
                          <p>{item.user.email}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 mt-4">
                      {item.status === "approved" ? null : item.paid ? (
                        <Link to={`/payment/${item.id}`}>
                          <Button block>Edit Bukti Pembayaran</Button>
                        </Link>
                      ) : (
                        <Button
                          onClick={() => {
                            setIdTicket(item.id);
                            setStep(true);
                            chooseTicket(item.id);
                          }}
                          block
                        >
                          Bayar Sekarang
                        </Button>
                      )}
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          <h2>Isi Data Penumpang</h2>
        </div>
        <div className="container my-5">
          <div className="container mt-3">
            <Card className="mt-5" border="dark">
              <Card.Body>
                <Form>
                  {totalInput(order?.chooseTicket?.qty).map((item, i) => (
                    <div className="container mb-5 border border-dark" key={i}>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Penumpang {i + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            setPassenger({
                              ...passenger,
                              [`passenger_${i + 1}`]: {
                                ...passenger[`passenger_${i + 1}`],
                                name: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>No Indentitas Penumpang {i + 1}</Form.Label>
                        <Form.Control
                          type="text"
                          onChange={(e) =>
                            setPassenger({
                              ...passenger,
                              [`passenger_${i + 1}`]: {
                                ...passenger[`passenger_${i + 1}`],
                                identity: e.target.value,
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </div>
                  ))}
                </Form>
                <div className="col text-center">
                  <Link to={`/payment/${idTicket}`}>
                    <Button
                      onClick={() => addPassenger(passenger, idTicket)}
                      className="w-50"
                    >
                      Terapkan Penumpang
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    ticket: state.ticket,
    user: state.user,
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTicket: () => dispatch(getTicket()),
    thisUser: () => dispatch(thisUser()),
    myTicket: () => dispatch(myTicket()),
    addPassenger: (load, id) => dispatch(addPassenger(load, id)),
    chooseTicket: (id) => dispatch(chooseTicket(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTicket);
