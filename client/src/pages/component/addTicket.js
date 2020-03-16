import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";

import { addTicket } from "../../_actions/ticket";
import { getType } from "../../_actions/type";
import { getStation } from "../../_actions/station";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

const AddTicket = props => {
  const [data, setData] = useState({
    nameTrain: "",
    type_id: 0,
    dateStart: "",
    startStation: 0,
    startTime: "",
    destinationStation: 0,
    arrivalTime: "",
    price: 0,
    qty: 0
  });
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
    props.getType();
    props.getStation();
  }, []);

  const validate = data => {
    let valid = false;
    for (let prop in data) {
      if (data[prop] == "" || data[prop] == 0) {
        valid = true;
      }
    }
    if (valid) {
      alert("input yang benar");
    } else {
      props.addTicket(data);
      alert("berhasil");
    }
  };
  return (
    <>
      <div className="container mt-5">
        <h2>Tambah Tiket</h2>
        <div className="row mt-5">
          <div className="col">
            <form autoComplete="off">
              <TextField
                id="outlined-secondary"
                label="Nama Kereta"
                variant="outlined"
                color="primary"
                style={{ width: "100%" }}
                className="my-2"
                value={data.nameTrain}
                onChange={e => setData({ ...data, nameTrain: e.target.value })}
              />
              <FormControl variant="outlined" className="w-100 my-2">
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Jenis Kereta
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={data.type_id}
                  onChange={e => setData({ ...data, type_id: e.target.value })}
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {props.type.data.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                id="date"
                label="Tanggal Keberangkatan"
                type="date"
                defaultValue="2020-05-24"
                variant="outlined"
                className="my-2"
                InputLabelProps={{
                  shrink: true
                }}
                value={data.dateStart}
                style={{ width: "100%" }}
                onChange={e => setData({ ...data, dateStart: e.target.value })}
              />
              {console.log(data.dateStart, "woi")}
              <FormControl variant="outlined" className="w-100 my-2">
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Stasiun Awal
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={data.startStation}
                  onChange={e =>
                    setData({ ...data, startStation: e.target.value })
                  }
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {props.station.data.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.location} - {item.station} ({item.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                id="time"
                label="Jam Keberangkatan"
                type="time"
                defaultValue="13:30"
                variant="outlined"
                className="my-2"
                value={data.startTime}
                InputLabelProps={{
                  shrink: true
                }}
                value={data.startTime}
                style={{ width: "100%" }}
                onChange={e => setData({ ...data, startTime: e.target.value })}
              />
              <FormControl variant="outlined" className="w-100 my-2">
                <InputLabel
                  ref={inputLabel}
                  id="demo-simple-select-outlined-label"
                >
                  Stasiun Tujuan
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={data.destinationStation}
                  onChange={e =>
                    setData({ ...data, destinationStation: e.target.value })
                  }
                  labelWidth={labelWidth}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {props.station.data.map(item => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.location} - {item.station} ({item.code})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                id="time"
                label="Jam Tiba"
                type="time"
                variant="outlined"
                defaultValue="13:30"
                className="my-2"
                value={data.arrivalTime}
                InputLabelProps={{
                  shrink: true
                }}
                style={{ width: "100%" }}
                onChange={e =>
                  setData({ ...data, arrivalTime: e.target.value })
                }
              />
              <TextField
                id="outlined-secondary"
                label="Harga Tiket"
                type="number"
                variant="outlined"
                color="primary"
                value={data.price}
                style={{ width: "100%" }}
                className="my-2"
                onChange={e => setData({ ...data, price: e.target.value })}
              />
              <TextField
                id="outlined-secondary"
                label="Qty"
                type="number"
                variant="outlined"
                color="primary"
                value={data.qty}
                style={{ width: "100%" }}
                className="my-2"
                onChange={e => setData({ ...data, qty: e.target.value })}
              />
            </form>
          </div>
        </div>
        <div className="row text-center my-5">
          <div className="col">
            <Button
              variant="primary"
              className="w-50 mb-4 mt-2"
              onClick={() => validate(data)}
            >
              Tambah Tiket
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    type: state.type,
    station: state.station
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTicket: data => dispatch(addTicket(data)),
    getType: () => dispatch(getType()),
    getStation: () => dispatch(getStation())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddTicket);
