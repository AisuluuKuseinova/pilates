import { Button } from "@mui/material";
import React from "react";
import "../Payment/Payment.css";

import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <div
          id="PaymentForm"
          style={{
            bgcolor: "#FCF6EC",
            backgroundImage: "src={notFound}",
            height: "100vh",
            paddingTop: "100px",
          }}
        >
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form className="credit">
            <input
              className="inp1"
              type="tel"
              name="number"
              placeholder="Card Number"
              style={{ textAlign: "center" }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              className="inp2"
              type="tel"
              name="name"
              placeholder="Name on card"
              style={{ textAlign: "center" }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              className="inp3"
              type="tel"
              name="expiry"
              placeholder="Expiry date"
              style={{ textAlign: "center" }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <input
              className="inp4"
              type="tel"
              name="cvc"
              placeholder="CVV"
              style={{ textAlign: "center" }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <br />
            <Link to="/products">
              <Button
                className="grid-button"
                variant="contained"
                color="success"
                sx={{
                  color: "white",
                  background: "rgb(125, 142, 125)",
                }}
              >
                Confirm Payment
              </Button>
            </Link>
          </form>
        </div>
      </div>
    );
  }
}
