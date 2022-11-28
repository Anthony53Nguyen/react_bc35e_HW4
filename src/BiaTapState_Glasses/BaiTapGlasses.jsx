import React, { Component } from "react";

export default class BaiTapGlasses extends Component {

  data = require("./dataGlasses.json");

  state = {
    try: (
      <img
        src={this.data[2].url}
        style={{ width: "62%", marginTop: "0.3rem" }}
        alt="..."
      />
    ),
  };

  displayGlasses = () => {
    return (
      <div className="row w-50 py-4 bg-white">
        {this.data.map((glass) => (
          <div className="col-2 d-flex justify-content-center px-2 py-2">
            <img
              style={{
                height: "6vh",
                width: "100%",
                border: "1px solid black",
              }}
              src={glass.url}
              alt="..."
              onClick={(e) => {
                this.setState({
                  try: (
                    <img
                      src={glass.url}
                      style={{ width: "62%", marginTop: "0.3rem" }}
                      alt="..."/>
                  ),
                });
              }}/>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)),url('glassesImage/background.jpg')",
          height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="py-4 text-center text-white"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5" }}
        >
          TRY GLASSES APP ONLINE
        </p>

        <div className="text-center d-flex justify-content-center my-4 py-3">
          <div className="row w-50">
            <div className="col d-flex justify-content-center">
              <div
                className="py-5"
                style={{
                  backgroundImage: "url('glassesImage/model.jpg')",
                  height: "13rem",
                  width: "60%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {this.state.try}
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div
                style={{
                  backgroundImage: "url('glassesImage/model.jpg')",
                  height: "13rem",
                  width: "60%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="text-center d-flex justify-content-center my-5 py-4">
          {this.displayGlasses()}
        </div>
      </div>
    );
  }
}
