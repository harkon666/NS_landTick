import React, { useState, useEffect } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { orderTicket } from "../../_actions/order";

import ModalBooking from "./modalBooking";

const calculationHour = (start, arrival) => {
  const x = start.split(":");
  const y = arrival.split(":");
  let result = Number(x[0]) - Number(y[0]);
  if (result < 0) {
    result = result * -1;
    return `${result} jam`;
  } else {
    return `${result} jam`;
  }
};

const ListTicket = ({ list, orderTicket, quantity }) => {
  const [load, setLoad] = useState({
    ticket_id: 0,
    qty: 0,
    totalPrice: 0,
    flag: false
  });

  const [show, setShow] = useState(false);

  const storeTicket = load => {
    orderTicket(load);
  };
  const chooseTicket = item => {
    setLoad({
      ...load,
      ticket_id: item.id,
      qty: quantity,
      totalPrice: item.price,
      flag: true
    });
  };

  if (load.flag) {
    storeTicket(load);
    setLoad({ ...load, flag: false });
  }

  console.log(quantity, "woi gan");
  return (
    <>
      {list.length > 0 ? (
        <>
          <ModalBooking show={show} onHide={() => setShow(false)} />
          <div className="container">
            <div className="row my-3">
              <div className="col ml-3">Nama Kereta</div>
              <div className="col">Berangkat</div>
              <div className="col">Tiba</div>
              <div className="col">Durasi</div>
              <div className="col">Harga Per Orang</div>
              <div className="col-2"></div>
            </div>
            {list.map((item, index) => (
              //ini nanti harus ada hovernya
              <Card className="my-3 shadow" key={index}>
                <div className="container">
                  <div className="row my-3">
                    <div className="col">
                      <div className="row">
                        <div className="col">{item.nameTrain}</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h6>{item?.type?.name}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">{item.startTime}</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h6>{item.start.location}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="row">
                        <div className="col">{item.arrivalTime}</div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <h6>{item.end.location}</h6>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      {calculationHour(item.startTime, item.arrivalTime)}
                    </div>
                    <div className="col">Rp. {item.price}</div>
                    <div className="col">
                      <Button
                        onClick={() => {
                          chooseTicket(item);
                          setShow(true);
                        }}
                      >
                        Beli
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    order: state.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    orderTicket: load => dispatch(orderTicket(load))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTicket);
