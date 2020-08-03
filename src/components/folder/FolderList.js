import React, { Component } from "react";
import FolderDisplay from "../dashboard/FolderDisplay";

import { connect } from "react-redux";
import * as actions from "../../actions";
import addIcon from '../../images/addIcon.png' ;
import { Link, withRouter } from "react-router-dom";


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
        <div className="ml0 ml4-ns">
          
          <div className="project_lis flex justify-center flex-wrap  mb4  ">

            <div className="newPost flex black b mr2 mt4-ns  br4 " style={{ height:'8.5vh',border:"0.5",  background:'#FDECF4'}}>
                        <img src={addIcon} alt="" style={{height:'20px' , padding:'2.5vh 0.5vw 0 1vw'}}/>
                        <Link   className="f6 fm new pl2 pt3 pr3 br4 no-underline "
                                style={{fontSize:'0.7em' ,color:"#ED5A9E" , height:'2vh'  }}
                                to="/new"> New Post</Link>
                
              </div>
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
