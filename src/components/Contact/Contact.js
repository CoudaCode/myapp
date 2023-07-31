import React, { Component } from "react";
import customer from "./customer.png";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      users: [],
    };
  }

  render() {
    return (
      <div className="q">
        <div className="container">
          <div className="container text-left">
            <br></br>
            <br></br>
            <h1 className="d">
              {" "}
              <img src={customer} alt=""></img>&nbsp;Contact
            </h1>
            <br></br>

            <h1>Bureau du directeur général</h1>
            <br></br>
            <h5>
              {" "}
              <i className="fa fa-phone" aria-hidden="true"></i>&nbsp;Telephone
              <br></br>
              <br></br>+225 07 47 18 52 91 / +255 46 38 02 87{" "}
            </h5>
            <br></br>
            <h5>
              {" "}
              <i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;Email
              <br></br>
              <br></br>couda.dm@gmail.com{" "}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
