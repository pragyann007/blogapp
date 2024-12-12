import React from "react";

const Form = ({ type, toggle }) => {
  const isSignIn = type === "sign-in";
 

  return (
    <div className={`form-wrapper align-items-center`}>
      <div className={`form ${type}`}>
        {isSignIn ? (
          <>
            <h2>Sign in</h2>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <button >Sign In</button>
            <p className="forgot-pass">
              <b>Forgot password?</b>
            </p>
            <p>
              <span>Don't have an account? </span>
              <b onClick={toggle} className="pointer">
                &nbsp;Sign up here
              </b>
            </p>
          </>
        ) : (
          <>
            <div className="input-group">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-group">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <div className="input-group">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Confirm password" />
            </div>
            <button>Sign Up</button>
            <p>
              <span>Already have an account?</span>
              <b onClick={toggle} className="pointer">
                &nbsp;Sign in here
              </b>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;
