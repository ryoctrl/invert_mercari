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
  handleChangeText = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmitButton = event => {
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
        <h1>this is PostPage</h1>
        <h3>{isBuy}物を出品しましょう</h3>
        <p>必要情報を入力して</p>
        <form>
          <p>商品名</p>
          <input type="text" name="productName" onChange={this.handleChangeText} />
          <p>説明</p>
          <textarea
            name="description"
            rows="10"
            cols="60"
            onChange={this.handleChangeText}
          />
          <p>価格</p>
          <input type="text" name="price" onChange={this.handleChangeText} />
          <p>ユーザー名</p>
          <input type="text" name="userName" onChange={this.handleChangeText} />
          <p />
          <button onClick={this.handleSubmitButton}>send</button>
        </form>
      </div>
    );
  }
}
