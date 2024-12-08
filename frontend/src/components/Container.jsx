import React, { useState } from "react";
import Form from "./Form";
import Content from "./Content";
import "./Container.css";

const Container = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div
      className={`container ${isSignIn ? "sign-in" : "sign-up"}`}
      id="container"
    >
      <div className="row">
        <div className="col align-items-center flex-col sign-up">
          <Form type="sign-up" toggle={toggle} />
        </div>

        <div className="col align-items-center flex-col sign-in">
          <Form type="sign-in" toggle={toggle} />
        </div>
      </div>

      <div className="row content-row">
        <Content type="sign-in" />

        <Content type="sign-up" />
      </div>
    </div>
  );
};

export default Container;
