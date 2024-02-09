import React from "react";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

import CarRentalIcon from "@mui/icons-material/CarRental";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <div className="form__label">
            <CarRentalIcon style={{ marginBottom: "4px", marginLeft: "4px" }} />
            <span>Car</span>
          </div>
          {/* <input type="text" placeholder="From address" required /> */}
          <select name="product" id="SelectCarDropdown">
            <option value="" selected="selected" data-select2-id="2">
              Select Car
            </option>
            <option value="3471">Tempo Traveler(17 seats)</option>
            <option value="3468">Etios</option>
            <option value="3466">Ertiga</option>
            <option value="3462">Aura</option>
            <option value="3338">Innova</option>
            <option value="3336">Swift Dzire</option>
            <option value="3327">INNOVA CRYSTA</option>
            <option value="3324">Tempo Traveler(13 seats)</option>
            <option value="3296">Hundai Xcent</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <div className="form__label">
            <LocationOnIcon
              style={{ marginBottom: "4px", marginLeft: "4px" }}
            />
            <span>Pick-up</span>
          </div>
          {/* <input type="text" placeholder="From address" required /> */}
          <select name="pickup_loc" id="pickupLocDropdown" aria-hidden="true">
            <option value="" data-select2-id="4">
              Select Location
            </option>
            <option value="Others">Others</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Orchha">Orchha</option>
            <option value="Maihar">Maihar</option>
            <option value="Rewa">Rewa</option>
            <option value="Sagar">Sagar</option>
            <option value="Jhansi">Jhansi</option>
            <option value="Ashoknagar">Ashoknagar</option>
            <option value="Guna">Guna</option>
            <option value="Sivani">Sivani</option>
            <option value="Balaghat">Balaghat</option>
            <option value="Chhindwara">Chhindwara</option>
            <option value="Pachmadhi">Pachmadhi</option>
            <option value="Betul">Betul</option>
            <option value="Itarsi">Itarsi</option>
            <option value="Hoshangabad">Hoshangabad</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Indore">Indore</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <div className="form__label">
            <LocationOnIcon
              style={{ marginBottom: "4px", marginLeft: "4px" }}
            />
            <span>Drop-of</span>
          </div>
          {/* <input type="text" placeholder="From address" required /> */}
          <select name="pickup_loc" id="pickupLocDropdown" aria-hidden="true">
            <option value="" data-select2-id="4">
              Select Location
            </option>
            <option value="Others">Others</option>
            <option value="Bhopal">Bhopal</option>
            <option value="Khajuraho">Khajuraho</option>
            <option value="Orchha">Orchha</option>
            <option value="Maihar">Maihar</option>
            <option value="Rewa">Rewa</option>
            <option value="Sagar">Sagar</option>
            <option value="Jhansi">Jhansi</option>
            <option value="Ashoknagar">Ashoknagar</option>
            <option value="Guna">Guna</option>
            <option value="Sivani">Sivani</option>
            <option value="Balaghat">Balaghat</option>
            <option value="Chhindwara">Chhindwara</option>
            <option value="Pachmadhi">Pachmadhi</option>
            <option value="Betul">Betul</option>
            <option value="Itarsi">Itarsi</option>
            <option value="Hoshangabad">Hoshangabad</option>
            <option value="Ujjain">Ujjain</option>
            <option value="Gwalior">Gwalior</option>
            <option value="Indore">Indore</option>
            <option value="Jabalpur">Jabalpur</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <div className="form__label">
            <CalendarMonthIcon
              style={{ marginBottom: "4px", marginLeft: "4px" }}
            />
            <span>Pick-Up</span>
          </div>
          <input
            type="datetime-local"
            id="pickUpDateTime"
            name="pickUpDateTime"
          />
        </FormGroup>

        <FormGroup className="form__group">
          <div className="form__label">
            <CalendarMonthIcon
              style={{ marginBottom: "4px", marginLeft: "4px" }}
            />
            <span>Drop-Off</span>
          </div>
          <input
            type="datetime-local"
            id="dropOffDateTime"
            name="dropOffDateTime"
          />
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
