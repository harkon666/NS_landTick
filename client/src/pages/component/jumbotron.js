import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "../../index.css";

const MyJumbotron = () => {
  return (
    <>
      <Jumbotron fluid className="gradient">
        <Container>
          <div className="col-6">
            <h2 className="text-light pb-3">Selamat Pagi, Ticket Seekers !</h2>
            <p className="ml-2 text-light" style={{ fontSize: 22 }}>
              Ingin Pulkam dengan Good Deal?
            </p>
            <p
              className="ml-2 text-light"
              style={{ fontSize: 22, marginTop: -15 }}
            >
              Masuk atau Daftar Sekarang!
            </p>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default MyJumbotron;
