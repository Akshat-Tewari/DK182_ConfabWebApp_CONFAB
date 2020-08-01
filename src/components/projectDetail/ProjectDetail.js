import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ProblemDisplay2 from "../dashboard/ProblemDisplay2";
import FolderListing from "../folder/FolderListing";
import "../../App.css";

class ProjectDetail extends Component {
  
    componentWillMount() {
      console.log(this.props.param);
      this.props.dispatch(actions.fetchProjectById());
    }


  render() {
    console.log(this.props.projects);
    const { projects } = this.props;

  
      
   

    return projects.length ? (
      <div className=" f7">
        <FolderListing />

        <div className="bn br4 blue bg-lightest-blue  tc pa3 pt1 ttu ml5 b fm mb4" style={{height:'4.5vh', width:'7vw' , fontSize:'0.8em'}}>{this.props.match.params.slug}</div>
        <div className="" style={{ marginLeft: "4vw" }}>
          <div className="project_lis flex flex-column mb4 ml3 ">
            {projects.map((project) => (
              <ProblemDisplay2 project={project} key={project._id} />
            ))}
          </div>
        </div>
      </div>
    ) : (
      <div className=" tc ">loading...</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.projectReducer.data,
  };
};

export default connect(mapStateToProps)(ProjectDetail);
