import React, { Component } from "react";
import FolderDisplay from "../dashboard/FolderDisplay";

import { connect } from "react-redux";
import * as actions from "../../actions";

import photo from "../../images/berl.jpg";

class FolderList extends Component {
  componentWillMount() {
    this.props.dispatch(actions.fetchFolders());
  }

  render() {
    const { folders } = this.props;

    return !folders.length ? (
      <div className="tc flex flex-wrap" style={{margin:'3.6vh'}}>
        <div className="ma2  br4" style={{width:"108px" , height:"53px" ,background:"#00000007"}}></div>
        <div className="ma2  br4" style={{width:"108px" , height:"53px" ,background:"#00000007"}}></div>
        <div className="ma2  br4" style={{width:"108px" , height:"53px" ,background:"#00000007"}}></div>
        <div className="ma2  br4" style={{width:"108px" , height:"53px" ,background:"#00000007"}}></div>

      </div>
    ) : (
      <div className="">
        <div className="ml4">
          
          <div className="project_lis flex flex-wrap  mb4  ">
            {folders.map((folder) => (
              <FolderDisplay folder={folder} key={folder._id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    folders: state.folderReducer.data,
  };
};

export default connect(mapStateToProps)(FolderList);
