import React from "react";
import Navbar from "../organisms/Navbar";
import exclaim from "../assets/exclaim.svg";

export const Success = () => {
  return (
    <>
      <Navbar text="welcome" buttontext="login" link='/login'/>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card" style={{ height: 300 }}>
              <div className="text-center ">
                <img
                  src={exclaim}
                  alt="exclaimicon"
                  style={{ background: "#FF99001A", padding: 20 }}
                />
              </div>
              <p
                className="text-center"
                style={{ fontSize: 24, fontWeight: "500", color: "#FF9900" }}
              >
                Pending
              </p>
              <p className="text-center">
                Your registration is awaiting approval from our partnership team
              </p>
              <div>
                <button
                  className="btn btn-blue btn-lg text-light"
                  style={{ padding: "10px 0", width: "100%" }}
                  onClick={() => (window.location.href = "/")}
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
