import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import "./employee.css";

export default function EmployeeList(props) {
  const { employee, deleteEmployee, updateEmployee } = props;

  return (
    <Container>
      <Row>
        <Col sm="12" className="_cardcol">
          {employee.map((m) => (
            <div className="employee" key={m._id.$oid}>
              <h2 className="text-center m-2">{m.name}</h2>
              <span className="text-center">{m.job}</span>
              <span className="text-center">{m.age} years old</span>
              <section className="actions">
                <Button
                  color="white"
                  onClick={() => updateEmployee(m._id.$oid)}
                >
                  <FontAwesomeIcon icon={faEdit} color="#ffa801" size="1x" />
                  Edit
                </Button>
                <Button
                  color="white"
                  onClick={() => deleteEmployee(m._id.$oid)}
                >
                  <FontAwesomeIcon
                    icon={faTrashAlt}
                    color="#ffa801"
                    size="1x"
                  />{" "}
                  Delete
                </Button>
              </section>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
