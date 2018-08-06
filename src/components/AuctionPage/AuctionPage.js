import React, { Component } from "react";

export default class AuctionPage extends Component {
  render() {
    const auctionId = this.props.match.params.AuctionId;
    console.log(this.props)
    return (
      <div className="AuctionPage">
		  <h1>this is AuctionPage of {auctionId}</h1>
	  </div>
    );
  }
}