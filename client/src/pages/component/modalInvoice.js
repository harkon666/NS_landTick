import React, { useEffect } from "react";
import { Modal, Card, Button } from "react-bootstrap";
import { chooseTicket, approvePayment } from "../../_actions/order";
import { connect } from "react-redux";

const ModalInvoice = (props) => {
  const fixDate = (item) => {
    const date = new Date(item);
    const option = { month: "long" };
    let res = new Intl.DateTimeFormat("en-US", option).format(date);
    let month = res.split(" ");
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
  };
  const { id, chooseTicket } = props;

  useEffect(() => {
    if (props.id) {
      chooseTicket(props.id);
    }
  }, [props.id]);
  const data = props?.order?.chooseTicket;
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
  if (!props?.order?.loading) {
    return (
      <Modal
        {...props}
        size="lg"
        animation={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div className="container">
            <div className="row mb-3">
              <h2>INVOICE</h2>
            </div>
            <div className="row border-bottom mb-3">
              <div className="col-6">
                <div className="row">
                  <h3 className="text-dark">Kereta Api</h3>
                </div>
                <div className="row mb-4">
                  {data?.ticket?.dateStart ? (
                    <>
                      {dayName(data?.createdAt)}, {fixDate(data?.createdAt)}
                    </>
                  ) : null}
                </div>
                <div className="row pt-4">
                  <b>{data?.ticket?.nameTrain}</b>
                </div>
                <div className="row mb-4">{data?.ticket?.type?.name}</div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col">
                    <div className="row mb-5">
                      <div className="col">
                        <h4>{data?.ticket?.startTime}</h4>
                        <h6>
                          {data?.ticket?.dateStart
                            ? fixDate(data?.ticket?.dateStart)
                            : null}
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h4>{data?.ticket?.arrivalTime}</h4>
                        <h6>
                          {data?.ticket?.dateStart
                            ? fixDate(data?.ticket?.dateStart)
                            : null}
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="row mb-5">
                      <div className="col">
                        <h4>
                          {data?.ticket?.start?.location} -{" "}
                          {data?.ticket?.start?.station} (
                          {data?.ticket?.start?.code})
                        </h4>
                      </div>
                    </div>
                    <div className="row mb-5">
                      <div className="col">
                        <h4>
                          {data?.ticket?.end?.location} -{" "}
                          {data?.ticket?.end?.station} (
                          {data?.ticket?.end?.code})
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="container">
                  <Card
                    className="bg-dark text-white"
                    style={{ height: "280px", width: "100%" }}
                  >
                    <Card.Img
                      style={{ height: 300 }}
                      alt="Attachment card"
                      src={
                        props?.order?.chooseTicket?.attachment
                          ? require(`../../../build/static/media/${props?.order?.chooseTicket?.attachment}`)
                          : null
                      }
                    />
                    <Card.ImgOverlay></Card.ImgOverlay>
                  </Card>
                  <p className="text-center">Payment Proof</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p className="text-dark">No. Tanda Pengenal</p>
              </div>
              <div className="col">
                <p className="text-dark">Nama Pemesan</p>
              </div>
              <div className="col">
                <p className="text-dark">No. Handphone</p>
              </div>
              <div className="col">
                <p className="text-dark">Email</p>
              </div>
            </div>
            <div className="row border-bottom mb-3">
              <div className="col">
                <p>31231247214</p>
              </div>
              <div className="col">
                <p>{data?.user?.name}</p>
              </div>
              <div className="col">
                <p>{data?.user?.phone}</p>
              </div>
              <div className="col">
                <p>{data?.user?.email}</p>
              </div>
            </div>
            <div className="row bg-light">
              <div className="col">
                <h2>Total</h2>
              </div>
              <div className="col">
                <h2 className="text-primary text-right">
                  Rp. {data?.totalPrice * data?.qty}
                </h2>
              </div>
            </div>
            <div className="row mt-2 pt-2 justify-content-center border-top">
              <div className="col-3">
                <Button
                  block
                  variant="danger"
                  onClick={() => {
                    props.approvePayment(props.id, "canceled");
                    window.location.reload();
                  }}
                >
                  Cancle
                </Button>
              </div>
              <div className="col-3">
                <Button
                  block
                  onClick={() => {
                    props.approvePayment(props.id, "approved");
                    window.location.reload();
                  }}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  } else {
    return <></>;
  }
};
const mapStateToProps = (state) => {
  return {
    order: state.order,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseTicket: (id) => dispatch(chooseTicket(id)),
    approvePayment: (id, status) => dispatch(approvePayment(id, status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalInvoice);
