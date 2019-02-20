import React, { Component } from "react";
import { Route, Link,BrowserRouter as Router } from "react-router-dom";
import Single from "./Single";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route exact path="/" render={() => (
            <div>
              <PhotoWall {...this.props}/>
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
        <Route
          path="/single/:id"
          render={params => <Single {...this.props} {...params} />}
        />
      </div>
    );
  }
}

export default Main;
