import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

export default class TopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getJsonData();
  }

  getJsonData() {
    fetch(`https://jsondata.okiba.me/v1/json/Ve0fg180806072454`)
      .then(response => response.json())
      .then(responseJson => this.setState({ data: responseJson }))
      .catch(e => e);
  }

  render() {
    const data = this.state.data;

    return (
      <div className="TopPage">
        <h1>this is TopPage</h1>
        <Link
          className="nav-link"
          to={{ pathname: "/PostPage", state: { isBuy:"買いたい" } }}
        >
          買いたいものを出す。
        </Link>
        <div>
          {data.map((data, index) => {
            return (
              <ItemCard
                productName={data.productName}
                userName={data.userName}
                description={data.description}
                price={data.price}
                showImage={true}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
