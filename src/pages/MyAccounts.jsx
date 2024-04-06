import { Margin } from "@mui/icons-material";
import React from "react";
import LoginForm from "../components/UI/LoginForm";
import SignUpForm from "../components/UI/SignUpForm";
import { Row, Col } from "reactstrap";
import "../styles/myaccounts.css";
import { padding } from "@mui/system";
import Dashboard from "../components/UI/Dashboard";

const MyAccounts = () => {
  return (
    <>
    <Dashboard/>
      {/* <Row>
        <Col lg="6">
          <div style={{ width: "60%", margin: "65px 3px 108px 55px" ,"padding" : "30px"}} className="">
            <LoginForm />
          </div>
        </Col>
        <Col lg="6">
          <div style={{ width: "90%", margin: "65px 3px 108px 55px" ,"padding" : "30px" }} className="">
            <SignUpForm />
          </div>
        </Col>
      </Row> */}

      
    </>
  );
};

export default MyAccounts;
