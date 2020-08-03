import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
import rupee from "../../images/rupee.png";
import folderIcon from "../../images/folderIcon.png";



import { Link } from "react-router-dom";


class FolderDisplay extends Component {
	render() {
		let { title , image, slug} = this.props.folder;
		


		return (
			<Link className="no-underline ba b--black-20 br4 mh2 mv2 mh2-ns mv0 mv4-ns" to={`/folder/${slug}`}>
				<div className="ba b--red-60 bn br4  flex flex-wrap    bg-white" >

					<div className="flex">
							<img src={folderIcon} alt="" style={{height:'20px' , padding:'2.5vh 0vw 0 1vw'}}/>
							<h2 className="b mh3  fm pa1 pa2-ns pl0 black mb2" style={{fontSize:'0.7em'}}>{title}</h2>
						
					</div>
										
				</div>
			</Link>
		);
	}
}

export default FolderDisplay;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
