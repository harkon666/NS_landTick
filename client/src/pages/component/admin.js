import React from "react";
import AddTicket from "./addTicket";
import ListTransaction from "./listTransaction";

const Admin = ({ route }) => {
  if (route.addTicket) {
    return <AddTicket />;
  } else if (route.listTransaction) {
    return <ListTransaction />;
  }
};

export default Admin;
