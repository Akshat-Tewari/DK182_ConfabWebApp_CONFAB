import React, { Component } from "react";
import "../../App.css";
import { BrowserRouter as Router} from "react-router-dom";


class MainPage extends Component {
  render() {
    return (
      <Router >
        <div className="mainPage mt0 ">

          <div className="">
              <div className="main-area ">
                       {this.props.children}
              </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default MainPage;
