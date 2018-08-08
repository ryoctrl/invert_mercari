import React, { Component } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";

import TopPage from "./components/TopPage/TopPage";
import PostPage from "./components/PostPage/PostPage";
import AuctionPage from "./components/AuctionPage/AuctionPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="App App-header">
            <Link className="nav-link" to={"/TopPage"}>
              <h1 className="App-title">コレウレ</h1>
            </Link>
          </header>
          <div className="body">
            <Switch>
              <Route exact path="/TopPage" component={TopPage} />
              <Route
                path="/AuctionPage/:userID/:productID"
                component={AuctionPage}
              />
              <Route path="/PostPage" component={PostPage} />
              />
              <Redirect to="/TopPage" />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
