import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getTicket } from "../_actions/ticket";
import { thisUser } from "../_actions/user";
import { uploadPayment, chooseTicket } from "../_actions/order";
import { useParams, Link } from "react-router-dom";
import MButton from "@material-ui/core/Button";

const Payment = ({ thisUser, user, order, uploadPayment, chooseTicket }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [step, setStep] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    chooseTicket(id);
    thisUser();
  }, []);

  const fixDate = item => {
    const param = item.split("-");
    const date = new Date(item);
    const option = { month: "long" };
    let res = new Intl.DateTimeFormat("en-US", option).format(date);
    let month = res.split(" ");
    return `${param[2]} ${month} ${param[0]}`;
  };

  const dayName = item => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const day = new Date(item);
    return days[day.getDay()];
  };

  const bayarSekarang = (id, file) => {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("payment", file);
    uploadPayment(formData);
  };
  console.log(order, "woisss");
  if (!order.loading) {
    return (
      <>
        <div className="container my-t">
          <h2 className="my-5">Invoice</h2>
          <div className="row">
            <div className="col-lg-8">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <Card bg="secondary" text="white" className="mt-1">
                      <Card.Body>
                        <div className="row my-3">
                          <div className="col-2">
                            <h2 className="text-warning">INFO</h2>
                          </div>
                          <div className="col-10">
                            <p className="text-white">
                              Silahkan melakukan pembayaran melalui M-banking,
                              E-bangking, ATM ke No.rek Yang Tertera
                            </p>
                            <p className="text-white">No.rek : 0981231231</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Card className="mt-3">
                      <Card.Body>
                        <div className="row mt-3 border-bottom">
                          <div className="col-3">No Tanda Pengenal</div>
                          <div className="col-3">Nama Pemesan</div>
                          <div className="col-3">No Handphone</div>
                          <div className="col-3">Email</div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-3">
                            <p>{user.data.identity}</p>
                          </div>
                          <div className="col-3">
                            <p>{user.data.name}</p>
                          </div>
                          <div className="col-3">
                            <p>{user.data.phone}</p>
                          </div>
                          <div className="col-3">
                            <p>{user.data.email}</p>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
                <h2 className="my-5">Rincian Harga</h2>
                <div className="row">
                  <div className="col">
                    <Card className="text-center">
                      <Card.Body>
                        <Card.Text>
                          <div className="row">
                            <div className="col">
                              <h4>
                                {order?.chooseTicket?.ticket?.nameTrain} x{" "}
                                {order?.chooseTicket?.qty}
                              </h4>
                            </div>
                            <div className="col">
                              <h4>RP. {order?.chooseTicket?.ticket?.price}</h4>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        <div className="row">
                          <div className="col">
                            <h3>Total</h3>
                          </div>
                          <div className="col">
                            <b>
                              <h3>
                                Rp.{" "}
                                {order?.chooseTicket?.totalPrice *
                                  order?.chooseTicket?.qty}
                              </h3>
                            </b>
                          </div>
                        </div>
                      </Card.Footer>
                    </Card>
                    {step ? (
                      <Link to="/my-ticket">
                        <Button
                          className="mt-3"
                          block
                          onClick={() => bayarSekarang(id, file)}
                        >
                          Bayar Sekarang
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className="mt-3"
                        block
                        onClick={() => bayarSekarang(id, file)}
                        disabled
                      >
                        Bayar Sekarang
                      </Button>
                    )}
                  </div>
                  <div className="col mb-5">
                    <Card className="bg-dark text-white">
                      <Card.Img
                        alt="Attachment card"
                        style={{ height: "180px" }}
                        src={preview}
                      />
                      <Card.ImgOverlay></Card.ImgOverlay>
                    </Card>
                    <h4 className="text-black text-center">
                      <form enctype="multipart/form-data">
                        <input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          style={{ display: "none" }}
                          name="payment"
                          onChange={e => {
                            setStep(true);
                            setFile(e.target.files[0]);
                            setPreview(URL.createObjectURL(e.target.files[0]));
                          }}
                        />
                        <label htmlFor="contained-button-file">
                          <MButton
                            variant="contained"
                            color="primary"
                            className="bg-primary"
                            component="span"
                            style={{ width: "335px" }}
                          >
                            Upload
                          </MButton>
                        </label>
                      </form>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="container">
                <div className="row">
                  <div className="col">
                    {/* yang akan dijadikan component dibawah ini*/}
                    <Card bg="light" style={{ width: "23rem" }}>
                      <Card.Header>
                        <h2>Kereta Api</h2>
                        <p>
                          <b>
                            {dayName(order?.chooseTicket?.ticket?.dateStart)} ,
                            {order.chooseTicket.ticket
                              ? fixDate(order?.chooseTicket?.ticket?.dateStart)
                              : null}
                          </b>
                        </p>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>
                          <h3 className="text-darkk">
                            {order?.chooseTicket?.ticket?.nameTrain}
                          </h3>
                          <p className="text-dark">
                            {order?.chooseTicket?.ticket?.type?.name}
                          </p>
                        </Card.Title>
                        <Card.Text>
                          <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                              <h3 className="text-dark">
                                {order?.chooseTicket?.ticket?.startTime}
                              </h3>
                              <p style={{ fontSize: 12 }}>
                                {order.chooseTicket.ticket
                                  ? fixDate(
                                      order?.chooseTicket?.ticket?.dateStart
                                    )
                                  : null}
                              </p>
                            </div>
                            <div className="col">
                              <h4 className="text-dark">
                                {order?.chooseTicket?.ticket?.start?.location} -{" "}
                                {order?.chooseTicket?.ticket?.start?.station} (
                                {order?.chooseTicket?.ticket?.start?.code})
                              </h4>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-1"></div>
                            <div className="col">
                              <h4 className="text-dark">
                                {order?.chooseTicket?.ticket?.arrivalTime}
                              </h4>
                              <p style={{ fontSize: 12 }}>
                                {order.chooseTicket.ticket
                                  ? fixDate(
                                      order?.chooseTicket?.ticket?.dateStart
                                    )
                                  : null}
                              </p>
                            </div>
                            <div className="col">
                              <h4 className="text-dark">
                                {order?.chooseTicket?.ticket?.end?.location} -{" "}
                                {order?.chooseTicket?.ticket?.end?.station} (
                                {order?.chooseTicket?.ticket?.end?.code})
                              </h4>
                            </div>
                          </div>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
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
    uploadPayment: formData => dispatch(uploadPayment(formData)),
    chooseTicket: id => dispatch(chooseTicket(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
