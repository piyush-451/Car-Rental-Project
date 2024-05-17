import React, { useState } from "react";
import { Button, FormGroup, Label, Input } from "reactstrap";

const PaymentOptions = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const formGroupStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "-18px",
  };

  const labelStyle = {
    marginLeft: "10px",
    marginTop: "12px",
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fa",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h3>Choose Your Payment Method</h3>
      <FormGroup style={formGroupStyle}>
        <Input
          type="radio"
          name="paymentOption"
          value="payAfterRide"
          checked={selectedOption === "payAfterRide"}
          onChange={handleOptionChange}
        />
        <Label style={labelStyle}>Pay after ride</Label>
      </FormGroup>

      {selectedOption === "payAfterRide" && (
        <div
          style={{
            marginTop: "-10px",
            backgroundColor: "#e9ecef",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h5>Pay after the ride</h5>
          {/* You can add more details or inputs here if needed */}
        </div>
      )}

      <FormGroup style={formGroupStyle}>
        <Input
          type="radio"
          name="paymentOption"
          value="payViaInstamojo"
          checked={selectedOption === "payViaInstamojo"}
          onChange={handleOptionChange}
        />
        <Label style={labelStyle}>Pay via Instamojo</Label>
      </FormGroup>

      {selectedOption === "payViaInstamojo" && (
        <div
          style={{
            marginTop: "-18px",
            backgroundColor: "#e9ecef",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <h5>Pay by Credit Card/Debit Card/Net Banking/UPI</h5>
          {/* You can add more details or inputs here if needed */}
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <p>
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our privacy policy.
        </p>
      </div>

      <Button
        style={{
          backgroundColor: "#e9a31b",
          padding: "10px 20px",
          borderColor: "white",
        }}
      >
        Place Order
      </Button>
    </div>
  );
};

export default PaymentOptions;
