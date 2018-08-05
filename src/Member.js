import React, {Component} from 'react';

export default class Member extends Component {
  render() {
    return (
      <div className="member">
        <h2 className="memberAuthor">
          {this.props.author}
        </h2>
      </div>
    );
  }
}