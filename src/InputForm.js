import React, { useState, Fragment, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Label,
  FormGroup,
} from "reactstrap";
import axios from "axios";
import EmployeeList from "./EmployeeList";

export default function InputForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    job: "",
    age: "",
  });
  const [employee, setEmployee] = useState([]);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value].toString() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addEmployee();
  };

  const getAllEmployees = async () => {
    try {
      const employee = await axios.get("http://3.131.20.56:5000/employees");
      setEmployee(employee.data);
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://3.131.20.56:5000/employee/${id}`);
      getAllEmployees();
      return;
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const updateEmployee = async (id) => {
    try {
      const employee = await axios.get(`http://3.131.20.56:5000/employee/${id}`);
      if (employee) {
        setUser({ ...user, ...employee.data });
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  const addEmployee = async () => {
    try {
      if (user._id) {
        await axios.put(`http://3.131.20.56:5000/employee/${user._id.$oid}`, {
          ...user,
        });
        getAllEmployees();
        setUser({ name: "", email: "", job: "", age: "" });
        return;
      } else {
        const data = await axios.post("http://3.131.20.56:5000/employee", {
          ...user,
        });
        if (data) {
          getAllEmployees();
          setUser({ name: "", email: "", job: "", age: "" });
          return;
        }
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <Fragment>
      <Container>
        <Row>
          <Col sm="12">
            <Form onSubmit={handleSubmit}>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={user.name}
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      name="email"
                      value={user.email}
                      placeholder="Email"
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label>Job</Label>
                    <Input
                      type="text"
                      name="job"
                      placeholder="Job"
                      value={user.job}
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label>Age</Label>
                    <Input
                      type="text"
                      name="age"
                      value={user.age}
                      placeholder="Age"
                      onChange={handleInput}
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button type="submit" color="success">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <EmployeeList
        employee={employee}
        deleteEmployee={deleteEmployee}
        updateEmployee={updateEmployee}
      />
    </Fragment>
  );
}
