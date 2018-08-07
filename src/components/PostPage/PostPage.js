import React, { Component } from "react";

export default class PostPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      description: "",
      price: "",
      userName: ""
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    alert(
      this.state.productName +
        "/" +
        this.state.description +
        "/" +
        this.state.price +
        "/" +
        this.state.userName +
        "/"
    );
  };

  render() {
    const isBuy = this.props.location.state.isBuy;
    console.log(isBuy);
    return (
      <div>
        <h1>{isBuy}物を出品する</h1>
        <p>必要情報を入力して</p>

        <p>商品名</p>
        <input type="text" name="productName" onChange={this.handleChange} />
        <p>説明</p>
        <textarea
          name="description"
          rows="10"
          cols="60"
          onChange={this.handleChange}
        />
        <p>価格</p>
        <input type="text" name="price" onChange={this.handleChange} />
        <p>ユーザー名</p>
        <input type="text" name="userName" onChange={this.handleChange} />
		<p/>
        <button onClick={this.handleSubmit}>send</button>
      </div>
    );
  }
}
