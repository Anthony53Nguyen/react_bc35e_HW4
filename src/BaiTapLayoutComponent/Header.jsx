import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="container-fluid bg-dark">
        <nav className="navbar navbar-expand-sm navbar-dark w-75 px-0">
          <a className="navbar-brand" href="#">
            QUAN LY SINH VIEN
          </a>
          {/* <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  style={({ isActive }) => (isActive ? { fontSize: 25 } : {})}
                  to="/home"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  style={({ isActive }) => (isActive ? { fontSize: 25 } : {})}
                  to="/link"
                >
                  Link
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  style={({ isActive }) => (isActive ? { fontSize: 25 } : {})}
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  style={({ isActive }) => (isActive ? { fontSize: 25 } : {})}
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    );
  }
}
