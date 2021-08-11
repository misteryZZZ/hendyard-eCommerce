import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaData from "../layout/MetaData";

const OrderSuccess = () => {
  return (
    <Fragment>
      <MetaData title={"Order Success"} />

      <div className="row justify-content-center">
        <div className="col-6 mt-4 text-center">
          <center>
            <lottie-player
              src="https://assets10.lottiefiles.com/packages/lf20_Vwcw5D.json"
              background="transparent"
              speed="1"
              style={{ width: "350px", height: "350px" }}
              autoplay
            ></lottie-player>
          </center>

          <h2>Your Order has been placed successfully.</h2>

          <Link to="/orders/me">Go to Orders</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default OrderSuccess;
