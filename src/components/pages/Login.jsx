import React, { useState } from "react";
import Navbar from "../organisms/Navbar";
import InputField from "../atoms/InputField";
import eye from "../assets/Eye.svg";

const credentials = {
  email: "emekachristian511@gmail.com",
  password: "Passw0rd",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);

  //submit
  const submit = (e) => {
    e.preventDefault();
    const saved: any = window.localStorage.getItem("data");
      const info = JSON.parse(saved);
    if (email === info.personalInfo.address && password === info.password) {
      window.location.href = "dashboard";
    } else {
      alert("invalid credentials");
    }
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <Navbar text="New to Xpress Rewards?" buttontext="Sign up" link="/" />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div>
                <h4
                  className="text-blue"
                  style={{ fontSize: 24, fontWeight: "500" }}
                >
                  Welcome Back!
                </h4>
                <p style={{ fontSize: 12, fontWeight: 400, color: "#606060" }}>
                  Sign in to your Xpress reward partner’s dashboarda
                </p>
              </div>
              <hr />
              <form onSubmit={submit}>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label="Email address"
                      type="text"
                      onChange={({ target: { value } }) => setEmail(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div style={{ position: "relative" }}>
                      <InputField
                        label="Password"
                        type={passwordShown ? "text" : "password"}
                        onChange={({ target: { value } }) => setPassword(value)}
                      />
                      <img
                        src={eye}
                        alt="eyeicon"
                        style={{
                          position: "absolute",
                          top: "65%",
                          left: "95%",
                        }}
                        onClick={togglePassword}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex py-2">
                  <p>Forgot Password?</p>{" "}
                  <p className="mx-2 text-blue">Reset it</p>
                </div>
                <div>
                  <button
                    className="btn btn-blue btn-lg text-light"
                    style={{ padding: "10px 0", width: "100%" }}
                    // onClick={() => (window.location.href = "/")}
                  >
                    Done
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
