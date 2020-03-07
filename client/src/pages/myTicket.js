import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton, Card, Button, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { getTicket } from "../_actions/ticket";
import { thisUser } from "../_actions/user";
import { myTicket } from "../_actions/order";
import { Link } from "react-router-dom";

const MyTicket = ({ thisUser, myTicket, order }) => {
  useEffect(() => {
    thisUser();
    myTicket();
  }, []);
  const fixDate = item => {
    const param = item.split("-");
    const date = new Date(item);
    const option = { month: "long" };
    let res = new Intl.DateTimeFormat("en-US", option).format(date);
    let month = res.split(" ");
    return `${param[2]} ${month} ${param[0]}`;
  };
  console.log(order, "woi");
  const myTickets = order.myTicket;
  return myTickets.map((item, i) => (
    <>
      <div className="container mb-5 px-5 mt-5 mr-5">
        <h2>Ticket Saya</h2>
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
                    <b>Saturday</b>, 21 February 2020
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <h3>{item.ticket.nameTrain}</h3>
                  <p>{item.ticket.type.name}</p>
                  {item.status != "approve" ? (
                    <p className="text-warning">Pending</p>
                  ) : (
                    <p className="text-success">Approve</p>
                  )}
                </div>
                <div className="col-3">
                  <div className="row">
                    <div className="col-1">|||||</div>
                    <div className="col-8">
                      <div className="row">
                        <div className="col">
                          <div className="row">
                            <h4>{item.ticket.startTimer}</h4>
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
                        <h4>{item.ticket.startStation}</h4>
                      </div>
                      <div className="row">
                        <p>{item.ticket.startStation}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="row">
                        <h4>{item.ticket.destinationStation}</h4>
                      </div>
                      <div className="row">
                        <p>{item.ticket.destinationStation}</p>
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
                      <p>367140218237</p>
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
                  <Link to={`/payment/${item.id}`}>
                    <Button block>Bayar Sekarang</Button>
                  </Link>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  ));
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    user: state.user,
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTicket: () => dispatch(getTicket()),
    thisUser: () => dispatch(thisUser()),
    myTicket: () => dispatch(myTicket())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyTicket);
