import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function Home() {
  const [showperpage, setShowPerPage] = useState(4);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showperpage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  let history = useNavigate();

  const hendelEdit = (id, name, age) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Age", age);
    localStorage.setItem("Id", id);
  };

  const hendelDelete = (id) => {
    var index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);
    history("/");
  };

  return (
    <>
      <div style={{ margin: "10rem" }}>
        <h1 className="text-center">REACT CRUD OPERATION 🚀</h1>
        <Table striped bordered hover responsive="sm md lg xl">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.slice(pagination.start, pagination.end).map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Age}</td>
                    <td>
                      <Link to={"/edit"}>
                        <Button
                          onClick={() =>
                            hendelEdit(item.id, item.Name, item.Age)
                          }
                        >
                          <span className="fa-sharp fa-solid fa-pen-to-square py-2"></span>
                          EDIT
                        </Button>
                      </Link>
                      &nbsp;
                      <Button
                        className="btn btn-danger"
                        onClick={() => hendelDelete(item.id)}
                      >
                        <span className="fa-solid fa-trash py-2"></span>
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h3 className="text-center">No Record Found</h3>
            )}
          </tbody>
        </Table>
        <Pagination
          showperpage={showperpage}
          onPaginationChange={onPaginationChange}
          total={Employees.length}
        />
        <br></br>
        <Link className="d-grid gap-2" to="/create">
          <Button className="btn btn-success" size="lg">
            CREATE
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
