import React, {Component} from 'react';
import Member from './Member';

export default class MenberList extends Component {
  render() {
    let menberNodes = this.props.data.map((menber)=>{
      return(
        <Member author={menber.author}></Member>
      );
    });

    return (
      <div className="menberList">
        {menberNodes}
      </div>
    );
  }
}
