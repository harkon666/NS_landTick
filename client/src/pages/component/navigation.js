import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ModalLogin from "./modalLogin";
import ModalRegister from "./modalRegister";
import DropDown from "./dropdown";

const Navigation = ({ user, auth }) => {
  const [modalLogin, setModalLogin] = useState(false);
  const [modalSignup, setModalSignup] = useState(false);
  useEffect(() => {
    if (auth.data.message == "success") {
      setModalLogin(false);
      setModalSignup(false);
    }
  }, [auth]);

  return (
    <nav class="navbar navbar-expand shadow">
      <div className="container">
        <div className="col-lg-8">
          <h2 className="navbar-brand text-primary">LandTick</h2>
        </div>
        <div className="col-lg-4 ml-5">
          {!user.isLogin && auth.data.message != "success" ? (
            <>
              <div className="ml-auto">
                <ModalRegister
                  show={modalSignup}
                  onHide={() => setModalSignup(false)}
                />
                <button
                  onClick={() => setModalSignup(true)}
                  class="btn btn-outline-primary my-2 my-sm-0 ml-1 ml-5"
                  type="submit"
                >
                  Daftar
                </button>
                <ModalLogin
                  show={modalLogin}
                  onHide={() => setModalLogin(false)}
                />
                <button
                  onClick={() => setModalLogin(true)}
                  class="btn btn-outline-primary my-2 my-sm-0 ml-3"
                >
                  Login
                </button>
              </div>
            </>
          ) : user.isLogin ? (
            <DropDown user={user} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Navigation);
