import React, { useState, useRef } from "react";
import { Jumbotron, Container } from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <div className="col-6">
            <h2>Selamat Pagi, Ticket Seekers !</h2>
            <p className="ml-2">Ingin Pulkam Good Deal?</p>
            <p className="ml-2">Masuk atau Daftar Sekarang</p>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
};

export default MyJumbotron;
