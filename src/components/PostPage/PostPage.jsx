import React, { Component } from "react";
import superagent from "superagent";

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
  handleSubmitButton = () => {
    console.log({title: this.state.productName, description: this.state.description, price: this.state.price});
    superagent
      .post("https://reversemercari.mosin.jp/product/create")
      .set('Content-Type', 'application/json')
      .send({title: this.state.productName, description: this.state.description,price: this.state.price})
      .end((err,res)=>{
        if (err) {
          alert(res.text);
        }else{
          console.log("送信成功!!!");
          
          this.setState({
            productName: "",
            description: "",
            price: "",
            userName: ""
          })
        }
      });
  };

  render() {
    // const isBuy = this.props.location.state.isBuy;
    // console.log(isBuy);
    return (
      <div>
        <h1>this is PostPage</h1>
        <h3>出品しましょう</h3>
        <p>必要情報を入力して</p>
          <p>商品名</p>
          <input
            type="text"
            name="productName"
            onChange={this.handleChangeText}
          />
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
      </div>
    );
  }
}
