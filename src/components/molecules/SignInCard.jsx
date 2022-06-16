import React, { useState, useRef } from "react";
import InputField from "../atoms/InputField";
import { SelectFields } from "../atoms/SelectFields";
import icon from "../assets/cloud.svg";
import upload from "../assets/upload.svg";
import eye from "../assets/Eye.svg";
import { useLocalStorage } from "../../utils/storage.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";

const SignInCard = (props) => {
  const [show, setShow] = useState(false);
  const fileRef = useRef();
  const [data, setData] = useLocalStorage("data", []);
  const [businessName, setBusinessName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [businessPhone, setBusinessPhone] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [category, setCategory] = useState("");
  const [number, setNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  //file upload
  const handleChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    console.log(file);
  };
  //view form
  const handleView = () => {
    setShow(!show);
  };
  //handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("password does not match and email is required");
    }else{
        setData({
            businessName,
            businessEmail,
            businessPhone,
            accountNo,
            category,
            Address: {
              number,
              street,
              city,
              state,
            },
            personalInfo: {
              name,
              phone,
              address,
            },
            password,
          });
          const savedData = window.localStorage.getItem("data");
          console.log(savedData);
          if (savedData === null) {     
            alert("Make sure all input fields are filled");
          } else {
            window.location.href = "success";
          }
        };
       
    }
    const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
      <div className="card">
        <div>
          <h4 className="text-blue" style={{ fontSize: 24, fontWeight: "500" }}>
            Welcome to Xpress Rewards
          </h4>
          <p style={{ fontSize: 12, fontWeight: 400, color: "#606060" }}>
            Complete the form below to get started
          </p>
        </div>
        <hr />

        <div>
          <form onSubmit={handleSubmit}>
            {show === false ? (
              <>
                <div className="row">
                  <div>
                    <p className="text-blue header">Business Information</p>
                  </div>
                  <div className="col-md-12">
                    <InputField
                      label="Business name"
                      type="text"
                      onChange={({ target: { value } }) =>
                        setBusinessName(value)
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label="Business email address"
                      type="text"
                      onChange={({ target: { value } }) =>
                        setBusinessEmail(value)
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label="Business phone number"
                      type="text"
                      onChange={({ target: { value } }) =>
                        setBusinessPhone(value)
                      }
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <SelectFields
                      label="Business category"
                      onChange={({ target: { value } }) => setCategory(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label=" Account number"
                      type="text"
                      onChange={({ target: { value } }) => setAccountNo(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p style={{ fontWeight: 500, fontSize: 14 }}>
                      Image (Logo)
                    </p>
                    <div
                      style={{ borderStyle: "dotted" }}
                      className="text-center"
                    >
                      <div className="text-center py-3">
                        <FontAwesomeIcon
                          icon={faCloudArrowUp}
                          color="#039BF0"
                        />
                      </div>
                      <p>Drag here or click the button below to upload </p>
                      <div style={{ padding: "20px 0" }}>
                        <input
                          type="file"
                          ref={fileRef}
                          onChange={handleChange}
                          style={{ display: "none" }}
                        />
                        <button
                          className="btn btn-blue text-light"
                          onClick={(e) => fileRef.current.click()}
                        >
                          file upload
                        </button>
                      </div>
                      <p>Maximum upload size: 10MB (.jpg)</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex" style={{ paddingTop: 60 }}>
                      <button
                        className="btn btn-blue text-light btn-lg"
                        style={{ padding: "0 50px" }}
                        onClick={handleView}
                      >
                        next
                      </button>
                      <p className="mx-2 pt-2">Step 1 of 2</p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row">
                  <div>
                    <p className="text-blue header pt-2">Business Address</p>
                  </div>
                  <div className="col-md-4">
                    <InputField
                      label=" house number"
                      type="text"
                      onChange={({ target: { value } }) => setNumber(value)}
                    />
                  </div>
                  <div className="col-md-8">
                    <InputField
                      label="street"
                      type="text"
                      onChange={({ target: { value } }) => setStreet(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputField
                      label="city"
                      type="text"
                      onChange={({ target: { value } }) => setCity(value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      label="state"
                      type="text"
                      onChange={({ target: { value } }) => setState(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <p className="text-blue header pt-2">
                        Contact Person Information
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label=" Contact name"
                      type="text"
                      onChange={({ target: { value } }) => setName(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <InputField
                      label=" Contact phone number"
                      type="text"
                      onChange={({ target: { value } }) => setPhone(value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <label htmlFor="address" style={{fontWeight: 500, fontSize: 14}}>Contact email address</label>
                    <input
                    className='form-control' 
                      type="text"
                      onChange={({ target: { value } }) => setAddress(value)}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <p className="text-blue header">Password</p>
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
                <div className="row">
                  <div className="col-md-12">
                    <div style={{ position: "relative" }}>
                      <InputField
                        label="Confirm password"
                        type={passwordShown ? "text" : "password"}
                        onChange={({ target: { value } }) => setConfirm(value)}
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
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex" style={{ paddingTop: 60 }}>
                      <button
                        className="btn btn-blue text-light btn-lg"
                        style={{ padding: "0 50px" }}
                        onClick={handleSubmit}
                      >
                        submit
                      </button>
                      <p className="mx-2 pt-2">Step 2 of 2</p>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInCard;
