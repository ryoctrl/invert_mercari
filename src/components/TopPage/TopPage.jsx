import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";
import superagent from "superagent";

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
    superagent
      .get("https://reversemercari.mosin.jp/products")
      .query({})
      .end((err, res) => {
        if (err) {
          alert(res.text);
        }
        const jsonData = JSON.parse(res.text);
        this.setState({
          data: jsonData.products
        });
      });
  } 

  render() {
    const data = this.state.data;

    return (
      <div className="TopPage">
        <h1> this is TopPage </h1>{" "}
        <Link
          className="nav-link"
          to={{
            pathname: "/PostPage",
            state: {
              isBuy: "買いたい",
            }
          }}
        >
          買いたいものを出す。{" "}
        </Link>{" "}
        <div>
          {" "}
          {data.map((data, index) => {
            return (
              <ItemCard
                productName={data.title}
                userName="null"
                description={data.description}
                price={data.price}
                showImage={true}
                key={data.productId}
              />
            );
          })}{" "}
        </div>{" "}
      </div>
    );
  }
}
