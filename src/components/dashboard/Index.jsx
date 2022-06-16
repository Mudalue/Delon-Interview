import React from "react";
import Dropdown from "../atoms/Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import Table from "../molecules/Table";
const Index = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              style={{ marginTop: 50 }}
              className="d-flex justify-content-between"
            >
              <Dropdown />
              <div className="d-flex">
                <div className="d-flex bg-light px-3">
                  <p className="pt-3">
                    <FontAwesomeIcon icon={faMagnifyingGlass} color="#C4C4C4" />
                  </p>
                  <p
                    className="mx-2 pt-3"
                    style={{
                      fontSize: 12,
                      fontWeight: "400",
                      color: "#C4C4C4",
                    }}
                  >
                    Name/Phone no / Location
                  </p>
                </div>
                <div
                  className="d-flex mx-3 px-3"
                  style={{ background: "#039BF0" }}
                >
                  <p className="pt-3">
                    <FontAwesomeIcon icon={faPlus} color="#fff" />
                  </p>

                  <p className="text-light pt-3 mx-2" style={{
                      fontSize: 14,
                      fontWeight: "400",
                    }}>Add New Verifier</p>
                </div>
              </div>
            </div>
            <div className="card" style={{ marginTop: 50 }}>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
