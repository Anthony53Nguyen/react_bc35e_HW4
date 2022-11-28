import React, { Component } from "react";

export default class extends Component {
  render() {
    return (
      <div className="text-center d-flex justify-content-center mb-5">
        <div className="row w-75">
          <div className="col pl-0 d-flex justify-content-center">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i className="fa-solid fa-tv" style={{ fontSize: "2rem" }}></i>
              </a>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Fresh new layout
                </h5>
                <p className="card-text">
                  With Bootstrap 5, we've created a fresh new layout for this
                  template!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i
                  className="fa-solid fa-cloud-arrow-down"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>
              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Free to download
                </h5>
                <p className="card-text">
                  As always, Start Bootstrap has a powerful collectin of free
                  templates.
                </p>
              </div>
            </div>
          </div>
          <div className="col pr-0">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i
                  className="fa-solid fa-money-check"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>

              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Jumbotron hero header
                </h5>
                <p className="card-text">
                  The heroic part of this template is the jumbotron hero header!
                </p>
              </div>
            </div>
          </div>
          <div class="w-100 my-4"></div>
          <div className="col pl-0">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i
                  className="fa-brands fa-bootstrap"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>

              <div className="card-body">
                <h5 className="card-title font-weight-bold">Feature boxes</h5>
                <p className="card-text">
                  We've created some custom feature boxes using Bootstrap icons!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i
                  className="fa-solid fa-code"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>

              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  Simple clean code
                </h5>
                <p className="card-text">
                  We keep our dependencies up to date and squash bugs as they
                  come!
                </p>
              </div>
            </div>
          </div>
          <div className="col pr-0">
            <div className="card bg-light">
              <a
                href="#"
                className="btn btn-primary w-25 mx-auto py-3"
                style={{ marginTop: "-2rem" }}
              >
                <i
                  className="fa-regular fa-circle-check"
                  style={{ fontSize: "2rem" }}
                ></i>
              </a>

              <div className="card-body">
                <h5 className="card-title font-weight-bold">
                  A name you trust
                </h5>
                <p className="card-text">
                  Start Bootstrap has been the leader in free Bootstrap
                  templates since 2013!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
