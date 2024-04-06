import React from "react";
import { Row, Col,Button} from "reactstrap";

function BillingAddress() {
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Lakshadweep",
    "Delhi",
    "Puducherry",
  ];

  return (
    <div>
      <h2>Billing Address</h2>
      <form>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="name" className="form-label me-3">
              Name <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="name" required />
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="country" className="form-label me-3">
              Country/Region <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="country" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="street" className="form-label me-3">
              Street Address <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <select className="form-select" id="street" required>
              <option value="">Select State</option>
              {states.map((state, index) => (
                <option key={index} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="city" className="form-label me-3">
              Town / City <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="city" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="state" className="form-label me-3">
              State <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="state" required />
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="pin" className="form-label me-3">
              PIN Code <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="pin" required />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col sm="6" className="d-flex align-items-center">
            <label htmlFor="phone" className="form-label me-3">
              Phone <span className="asterik">*</span>
            </label>
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <input type="text" className="form-control" id="phone" required />
          </Col>
          <Col sm="6" className="d-flex align-items-center">
            <Button
              style={{
                backgroundColor: "#e9a31b",
                padding: "10px 20px",
                borderColor: "white",
              }}
            >
              Save Address
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default BillingAddress;
