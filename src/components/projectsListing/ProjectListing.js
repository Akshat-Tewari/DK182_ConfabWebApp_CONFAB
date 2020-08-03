import React, { Component } from "react";
import "../../App.css";

import ProjectList from "./ProjectList";
import FolderListing from "../folder/FolderListing";


class ProjectListing extends Component {
    render() {
        return (
        	<div className="flex justify-between">
				<div className="left">
					<FolderListing />
                	<div style={{}}>
                    	<ProjectList />
                	</div>
            	</div>

            	<div className="right dn dib-ns">
					<div className="notification ma4 pa3 ml0">
						<h2 className="ttu f7 ma2 pb2 " style={{color:"#ED5A9E" , borderBottom:"0.5px solid #F17EB4"}}>Notifications</h2>
						<p className="black-70 f7 justify-center fm b ma2 pt2">No New Notification</p>
					</div>

					<div className="people ma4 pa3 ml0">
						<h2 className="ttu f7 ma2 pb2 black-90" style={{ borderBottom:"0.5px solid #00000030"}}>Peers List</h2>
						<p className="black-70 f7 justify-center fm b ma2 pt2">Add People To your List</p>

					</div>
            	</div>
        	</div>
            
        );
    }
}

export default ProjectListing;
