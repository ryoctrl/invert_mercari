import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MenberList from './MemberList';

export default class MenberBox extends Component {
  getInitialState() {
    return ({count: this.props.data});
  }

  render() {
    return (
      <div className="menberBox">
        <h1>Member</h1>
        {/* <p>{this.state.count.length}</p> */}
        <MenberList data={this.props.data}/>
      </div>
    );
  }
}