import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faUsers,
  faClipboard,
  faGlobe,
  faRightFromBracket,
  faMoneyBillTrendUp,
  faBell,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import profile from "../assets/Profile-Picture.svg";
import logo from "../assets/LOGO.svg";
const style = {
  link: {
    textDecoration: "none",
    color: "#000",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1,
    padding: 10,
  },
};

const Sidebar = () => {
  return (
    <>
      <section style={{ display: "flex", width: "100%", height: "100vh" }}>
        {/* <siebar></siebar> */}
        <div
          className=" bg-light text-dark g-0"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "18%" }}
        >
          <div className="offcanvas-header ">
            <div className="text-center">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div class="offcanvas-body">
            <ul style={{ listStyleType: "none" }}>
              <li className="my-2 pt-2 link">
                <Link to="index" style={style.link}>
                  <FontAwesomeIcon
                    icon={faUsers}
                    color="#000"
                    className="mx-2"
                  />{" "}
                  Verifiers
                </Link>
              </li>

              <li className="my-2 pt-2 link">
                <Link to="/" style={style.link}>
                  <FontAwesomeIcon
                    icon={faMoneyBillTrendUp}
                    color="#000"
                    className="mx-2"
                  />{" "}
                  Transaction
                </Link>
              </li>
              <li className="my-2 pt-2 link">
                <Link to="/" style={style.link}>
                  <FontAwesomeIcon
                    icon={faRightFromBracket}
                    color="#000"
                    className="mx-2"
                  />{" "}
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* content */}
        <div className="container-fluid g-0" style={{ margin: 0 }}>
          <nav
            class="navbar navbar-expand-lg navbar-light bg-light text-light"
            style={{ padding: "15px 10px 10px 10px", margin: 0 }}
          >
            <div class="container-fluid">
              <button class="navbar-toggler" type="button">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div
                className="d-flex justify-content-between"
                style={{ width: "100%", paddingTop: 20 }}
              >
                <div className="d-flex">
                  <h4 className="text-dark mx-2">Verifiers</h4>
                  <p className="p-2 text-blue" style={{fontSize: 12, background: '#F2FAFF', borderRadius: 24}}>11</p>
                </div>
                <div className="d-flex">
                <p className='mx-2'>  <FontAwesomeIcon icon={faBell} color="#000" /></p>  
                  <img
                    src={profile}
                    alt="profile"
                    style={{ width: 25, height: 25 }}
                  />
                  <p className='mx-2'><FontAwesomeIcon icon={faChevronDown} color="#000" /></p>
                </div>
              </div>
              {/* <ul class="navbar-nav">
                  <li class="nav-item">
                  <div className="d-flex justify-content-end">
                      <div>
                        <h4 className="text-dark">Verifiers</h4>
                        <p className="p-2">11</p>
                      </div>
                      <div className="d-flex">
                        <FontAwesomeIcon
                          icon={faBell}
                          color="#000"
                        />
                        <img src={profile} alt="profile" style={{width: 10, height: 10}}/>
                      </div>
                    </div>
                  </li>
                </ul> */}
            </div>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default Sidebar;
