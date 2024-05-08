import React from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import FindCarForm from "../components/UI/FindCarForm2";
import ServiceSection from "../components/UI/ServiceSection";

const Services = () => {
  return (
    <Helmet title="Services">
      <CommonSection title="Our Popular Servives" />
      <ServiceSection />
      <div style={{ padding: "0 50px" }}>
        <FindCarForm />
      </div>
    </Helmet>
  );
};

export default Services;
