import React from "react";

const Content = ({ type }) => {
  const isSignIn = type === "sign-in";

  return (
    <div className="col align-items-center flex-col">
      {isSignIn ? (
        <>
          <div className="text sign-in">
            <h2>Welcome</h2>
          </div>
          <div className="img sign-in"></div>
        </>
      ) : (
        <>
          <div className="img sign-up"></div>
          <div className="text sign-up">
            <h2>Join with us</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Content;
