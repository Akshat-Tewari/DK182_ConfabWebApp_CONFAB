import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import "../../App.css";

import FolderList from "./FolderList";

class FolderListing extends Component {
    render() {
        return (
            <div className="flex flex-wrap ml2 ml5-ns">
            	
                <div style={{}}>
                    <FolderList />
                </div>
            </div>
        );
    }
}

export default FolderListing;
