import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { orderTicket } from "../../_actions/order";

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

const ListTicket = ({ list, orderTicket }) => {
  const [load, setLoad] = useState({
    ticket_id: 0,
    qty: 0,
    totalPrice: 0,
    flag: false
  });
  const storeTicket = load => {
    orderTicket(load);
  };
  const chooseTicket = item => {
    setLoad({
      ...load,
      ticket_id: item.id,
      qty: 1,
      totalPrice: item.price,
      flag: true
    });
  };

  if (load.flag) {
    storeTicket(load);
    setLoad({ ...load, flag: false });
  }
  return (
    <>
      {list.length > 0 ? (
        <>
          <div className="container">
            <div className="row my-3">
              <div className="col ml-3">Nama Kereta</div>
              <div className="col ml-3">Berangkat</div>
              <div className="col text-center">Tiba</div>
              <div className="col text-right">Durasi</div>
              <div className="col-4 text-center pl-5">Harga Per Orang</div>
            </div>
            {list.map((item, index) => (
              //ini nanti harus ada hovernya
              <Card
                className="my-3 shadow"
                onClick={() => {
                  chooseTicket(item);
                }}
                key={index}
                style={{ cursor: "pointer" }}
              >
                <div className="container">
                  <div className="row my-3">
                    <div className="col">{item.nameTrain}</div>
                    <div className="col">{item.startTimer}</div>
                    <div className="col">{item.arrivalTime}</div>
                    <div className="col">
                      {calculationHour(item.startTimer, item.arrivalTime)}
                    </div>
                    <div className="col">Rp. {item.price}</div>
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
