import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AuctionPage extends Component {
  render() {
    const userName = this.props.match.params.userID;
    const productName = this.props.match.params.productID;
    console.log(this.props);
    return (
      <div className="AuctionPage">
        <h1>
          {userName}さんは{productName}を欲しがっています
        </h1>
        <Link
          className="nav-link"
          to={{ pathname: "/PostPage", state: { isBuy: "売りたい" } }}
        >
          売りたいものを出す。
        </Link>
      </div>
    );
  }
}
