import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import { RoutingAdmin } from "../../_actions/component";
import { Link } from "react-router-dom";

const DropDown = ({ user, RoutingAdmin }) => {
  const [route, setRoute] = useState({
    listTransaction: true,
    addTicket: false
  });

  useEffect(() => {
    RoutingAdmin(route);
  }, [route]);
  return (
    <>
      <div style={{ marginLeft: 180 }}>
        <DropdownButton id="dropdown-basic-button" title={user.data.name}>
          <Link
            to="/"
            onClick={() => {
              setRoute({ ...route, addTicket: true, listTransaction: false });
              if (route.addTicket) {
                RoutingAdmin(route);
              }
            }}
          >
            <Dropdown.Item>Tiket Saya</Dropdown.Item>
          </Link>
          <Link
            to="/"
            onClick={() => {
              setRoute({ ...route, addTicket: false, listTransaction: true });
              RoutingAdmin(route);
            }}
          >
            <Dropdown.Item href="#/action-2">Payment</Dropdown.Item>
          </Link>
          <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
        </DropdownButton>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    component: state.component
  };
};

const mapDispatchToProps = dispatch => {
  return {
    RoutingAdmin: route => dispatch(RoutingAdmin(route))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
