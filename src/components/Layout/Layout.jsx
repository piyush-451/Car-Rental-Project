import React, { Fragment } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import BookingListProvider from "../../store/booking-list-store";

const Layout = () => {
  return (
    <Fragment>
      <BookingListProvider>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </BookingListProvider>
    </Fragment>
  );
};

export default Layout;
