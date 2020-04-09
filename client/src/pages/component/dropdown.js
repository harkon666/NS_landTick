import React, { useState, useEffect } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { connect } from "react-redux";
import { RoutingAdmin } from "../../_actions/component";
import { logout } from "../../_actions/user";
import { Link } from "react-router-dom";

const DropDown = ({ user, RoutingAdmin, logout }) => {
  const [route, setRoute] = useState({
    listTransaction: true,
    addTicket: false,
  });

  useEffect(() => {
    RoutingAdmin(route);
  }, [route]);

  if (user.data.isAdmin) {
    return (
      <>
        <div style={{ marginLeft: 180 }}>
          <DropdownButton id="dropdown-basic-button" title={user.data.name}>
            <Link
              to="/my-ticket"
              onClick={() => {
                setRoute({ ...route, addTicket: true, listTransaction: false });
                if (route.addTicket) {
                  RoutingAdmin(route);
                }
              }}
            >
              <Dropdown.Item>Tambah Tiket</Dropdown.Item>
            </Link>
            <Link
              to="/"
              onClick={() => {
                setRoute({ ...route, addTicket: false, listTransaction: true });
                RoutingAdmin(route);
              }}
            >
              <Dropdown.Item>List Transaksi</Dropdown.Item>
            </Link>
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
            >
              <Dropdown.Item onClick={() => window.location.reload()}>
                Logout
              </Dropdown.Item>
            </Link>
          </DropdownButton>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div style={{ marginLeft: 180 }}>
          <DropdownButton id="dropdown-basic-button" title={user.data.name}>
            <Link to="/my-ticket">
              <Dropdown.Item href="#/action-2">My Ticket</Dropdown.Item>
            </Link>
            <Link
              to="/"
              onClick={() => {
                logout();
                window.location.reload();
              }}
            >
              <Dropdown.Item>Logout</Dropdown.Item>
            </Link>
          </DropdownButton>
        </div>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    component: state.component,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    RoutingAdmin: (route) => dispatch(RoutingAdmin(route)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
