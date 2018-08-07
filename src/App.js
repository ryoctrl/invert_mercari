import React, {Component} from "react";
import {BrowserRouter, Route, Link, Redirect, Switch} from "react-router-dom";

import TopPage from "./components/TopPage/TopPage";
import PostPage from "./components/PostPage/PostPage";
import AuctionPage from "./components/AuctionPage/AuctionPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header className="App App-header">
            <h1 className="App-title">コレウレ</h1>
          </header>

          <Link className="nav-link" to={"/TopPage"}>
            TopPageへ
          </Link>
          <Link className="nav-link" to={"/AuctionPage"}>
            AuctionPageへ
          </Link>
          <Link className="nav-link" to={"/PostPage"}>
            PostPageへ
          </Link>
          <Switch>
            <Route exact path="/TopPage" component={TopPage}/>
            <Route path="/AuctionPage/:AuctionId" component={AuctionPage}/>
            <Route exact path="/PostPage" component={PostPage}/>
            <Redirect to="/TopPage"/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
