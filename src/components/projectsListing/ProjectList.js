import React, { Component } from "react";
import ProblemDisplay from "../dashboard/ProblemDisplay";

import { connect } from "react-redux";
import * as actions from "../../actions";

import photo from "../../images/berl.jpg";

class ProjectList extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchProjects());
  }

  render() {
    const { projects } = this.props;

    return !projects.length ? (
      <div className=" ml5 mt3">
        <div className="ma2 mb4 br4" style={{width:"47vw" , height:"25vh" ,background:"#00000007"}}></div>
        <div className="ma2 mb4 br4" style={{width:"47vw" , height:"25vh" ,background:"#00000007"}}></div>
        <div className="ma2 mb4 br4" style={{width:"47vw" , height:"25vh" ,background:"#00000007"}}></div>


      </div>
    ) : (
      <div className="">
        <div className=" ml1 ml4-ns" style={{}}>
          
          <div className="project_lis flex flex-column mb4  ">
            {projects.map((project) => (
              <ProblemDisplay project={project} key={project._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.data,
  };
};

export default connect(mapStateToProps)(ProjectList);
