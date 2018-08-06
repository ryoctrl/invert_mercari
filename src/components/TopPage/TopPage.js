import React, { Component } from "react";
import ItemCard from "../ItemCard/ItemCard";

export default class TopPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount () {
    this.getJsonData()
  }

  getJsonData(){
    fetch(`https://jsondata.okiba.me/v1/json/Ve0fg180806072454`)
      .then(response => response.json())
      .then(responseJson => this.setState({data:responseJson}))
      .catch(e => e)
  }

  render() {
    const data = this.state.data;

    return (
      <div className="TopPage">
        <h1>this is TopPage</h1>
        <div>
          {data.map(((data,index)=>{
                  return <ItemCard  productName={data.productName} 
                                    userName={data.userName} 
                                    description={data.description} 
                                    price={data.price} 
                                    showImage={true}
                                    key = {index}
                          />;
          }))}
        </div>

      </div>
    );
  }
}
