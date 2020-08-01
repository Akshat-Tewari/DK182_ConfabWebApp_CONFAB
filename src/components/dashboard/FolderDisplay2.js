import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
import rupee from "../../images/rupee.png";


import { Link } from "react-router-dom";


class FolderDisplay2 extends Component {
	render() {
		let { title , image, slug} = this.props.folder;
		


		return (
			<Link className="no-underline ba b--black-20 br4 mh2 mv4" to={`/folder/${slug}`}>
				<div className="ba b--red-60 bn br4  flex flex-wrap    bg-white" >

					<div className="">
							<h2 className="b mh3  fm pa2 black mb2" style={{fontSize:'0.9em'}}>{title}</h2>
						
					</div>
										
				</div>
			</Link>
		);
	}
}

export default FolderDisplay2;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
