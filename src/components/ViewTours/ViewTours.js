/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import "./ViewTours.css";
import { Link } from "react-router-dom";

export class ViewTours extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: [],
    };
  }

  async componentDidMount() {
    return fetch("https://tourisme-a3qt.onrender.com/view")
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          tours: responseJson,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className={"container"}>
        <br></br>
        <div className={"justify-content-center"}>
          <h1 className="rr">Tour Packages</h1>
        </div>
        <br></br>
        <br></br>

        <div className="row">
          {this.state.tours.map((value, key) => (
            <div className="card" key={key}>
              <img
                src={"https://i.pinimg.com/originals/54/2c/7e/542c7e0c990d70f3e732b8a9cf64815f.png"}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{value.tname}</h5>
                <p className="card-text justufy">{value.tdescription}</p>
                <br />
                <p className="card-text mb-0 p-8">
                  <b>Prix: </b>
                  {value.price}
                </p>
                <p className="card-text">
                  <b>Numero packages: </b>
                  {value.tnumber}
                </p>
                <Link to="/add">
                <div className="text-center">
                  <a href="#" className="btn btn-primary">
                    Faire une reservation
                  </a>
                </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ViewTours;
