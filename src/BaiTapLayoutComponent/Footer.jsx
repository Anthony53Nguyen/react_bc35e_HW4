import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return  (
      <div className="bg-dark text-center text-light small py-4">
        <span>Copyright </span>
        <i className="fa-regular fa-copyright" />
        <span> Anthony Nguyen 2022</span> 
      </div>
    );
  }
}
