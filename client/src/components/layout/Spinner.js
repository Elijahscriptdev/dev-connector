import React, { Fragment } from "react";
import spinner from "./spin.gif";

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt='loading...'
        style={{ width: "200px", margin: "auto", display: "block" }}
      />
    </Fragment>
  );
};

export default Spinner;
