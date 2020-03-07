import React, { useEffect } from "react";
import Jumbotron from "./component/jumbotron";
import Card from "./component/card";
import { connect } from "react-redux";
import { getTicket } from "../_actions/ticket";
import { thisUser } from "../_actions/user";
import Admin from "./component/admin";

const Home = ({ ticket, getTicket, thisUser, user, component }) => {
  useEffect(() => {
    getTicket();
    thisUser();
  }, []);

  const { data } = ticket;
  console.log(component, "wois");
  return (
    <>
      {!user.data.isAdmin ? (
        <>
          <Jumbotron />
          <div className="container">
            <Card data={data} />
          </div>
        </>
      ) : (
        <>
          <Admin route={component.data} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    ticket: state.ticket,
    user: state.user,
    component: state.component
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTicket: () => dispatch(getTicket()),
    thisUser: () => dispatch(thisUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
