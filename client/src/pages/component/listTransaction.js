import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import { allOrder, chooseTicket } from "../../_actions/order";
import ModalInvoice from "./modalInvoice";
import ModalEdit from "./ModalEdit";

const ListTransaction = ({ allOrder, order, chooseTicket }) => {
  const [modalInvoice, setModalInvoice] = useState({ id: null, show: false });
  const [modalEdit, setModalEdit] = useState({ id: null, show: false });
  useEffect(() => {
    allOrder();
  }, []);
  const { allData } = order;

  const colorStatus = item => {
    if (item == "pending") {
      return <p className="text-warning">{item}</p>;
    } else if (item == "approved") {
      return <p className="text-success">{item}</p>;
    } else {
      return <p className="text-danger">Cancel</p>;
    }
  };

  console.log(order, "woi cuks");
  return (
    <>
      <ModalInvoice
        show={modalInvoice.show}
        onHide={() => setModalInvoice({ ...modalInvoice, show: false })}
        id={modalInvoice.id}
      />
      <ModalEdit
        show={modalEdit.show}
        onHide={() => setModalEdit({ ...modalEdit, show: false })}
        id={modalEdit.id}
        setEdit={setModalEdit}
        edit={modalEdit}
      />
      <div className="container mt-5">
        <h2>List Transaksi</h2>
        <div className="row mt-5">
          <div className="col">
            <Table hover>
              <thead>
                <tr className="text-center">
                  <th>No</th>
                  <th>Users</th>
                  <th>Tiket</th>
                  <th>Bukti Transfer</th>
                  <th>Status Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {allData.map((item, i) => (
                  <tr className="text-center" key={item.id} value={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.user.name}</td>
                    <td>
                      {item.ticket.start.location} - {item.ticket.end.location}
                    </td>
                    <td>{item.attachment}</td>
                    <td>{colorStatus(item.status)}</td>
                    <td className="text-center">
                      <IconButton
                        onClick={() => {
                          setModalInvoice({
                            ...modalInvoice,
                            id: item.id,
                            show: true
                          });
                        }}
                        className="text-primary"
                      >
                        <SearchIcon />
                      </IconButton>
                      <IconButton
                        className="text-info"
                        onClick={() =>
                          setModalEdit({
                            ...modalEdit,
                            id: item.id,
                            show: true
                          })
                        }
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton className="text-danger">
                        <DeleteIcon />
                      </IconButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
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
    allOrder: () => dispatch(allOrder())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTransaction);
