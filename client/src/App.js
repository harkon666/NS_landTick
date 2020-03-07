import React, { useEffect } from "react";
import "./App.css";
import Home from "./pages/home";
import Payment from "./pages/payment";
import MyTicket from "./pages/myTicket";
import Navigation from "./pages/component/navigation";
import { thisUser } from "./_actions/user";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import payment from "./pages/payment";

function App({ user, thisUser, auth }) {
  useEffect(() => {
    thisUser();
  }, []);

  useEffect(() => {
    if (auth.data.message == "success") {
      thisUser();
    }
  }, [auth]);
  return (
    <>
      <Router>
        <header>
          <Navigation user={user} auth={auth} />
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/payment" exact component={Payment} />
          <Route path="/payment/:id" exact component={payment} />
          <Route path="/my-ticket" exact component={MyTicket} />
        </Switch>
      </Router>
    </>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    auth: state.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    thisUser: () => dispatch(thisUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
