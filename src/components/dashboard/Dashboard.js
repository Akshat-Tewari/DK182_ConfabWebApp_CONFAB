import React, { Component } from "react";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import ProjectListing from "../projectsListing/ProjectListing";

import ProjectDetail from "../projectDetail/ProjectDetail";
import NewPost from "../newPost/NewPost";
import MainPage from "../mainPage/MainPage";

class Dashboard extends Component {
  render() {
    return (
      <Router>
        <div className="mt3" style={{ maxWidth: "90vw" , marginLeft: "auto" , marginRight:"auto"}}>
          <MainPage>
            <Route exact path="/" component={ProjectListing} />
            <Route path="/folder/:slug" component={ProjectDetail} />
            <Route path="/new" component={NewPost} />

          </MainPage>
        </div>
      </Router>
    );
  }
}

export default Dashboard;

{
  /* <div className="mb3 w-100">
                 <Tab />
               </div>

               <div className="content">
                   <Route exact path="/dashboard" component={ProblemListing} />

                                <Route exact path="/dashboard/requirements" component={ProblemRequirements} />
                                <Route exact path="/dashboard/hints" component={ProblemHints} />
               </div> */
}