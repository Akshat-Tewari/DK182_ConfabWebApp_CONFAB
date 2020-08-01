import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
import saveIcon from "../../images/saveIcon.png";
import shareIcon from "../../images/shareIcon.png";


import { Link } from "react-router-dom";




class ProblemDisplay2 extends Component {
	render() {
		let { title,image, folder, text , createdAt} = this.props.project;
		
		


		return (
			<Link className="no-underline mb5" to={`/`}>
				<div className=" br4  flex flex-column justify-between mb2  bg-white" style={{width:"45vw" }}>

						<h2 className="f7 pa4 pv5 ma0  br4 black-80" style={{fontSize:'1em', background:'#00000008' , letterSpacing:'1.2px'}}>{text}</h2>						
					<div className="">
							<h2 className="b mh3 fm pa2 black " style={{fontSize:'0.9em'}}>{title}</h2>
							
							<div className="flex justify-between">
								<h2 className="b mh3 fm pa2 pv0 black-60 mb2" style={{fontSize:'0.7em' ,paddingTop:'0.75vh'}}>{createdAt}</h2>
								<div className="s-s-icon flex">
									<h2 className="f7 black-80 fm pb3 mh3">0 Comments</h2>
									<img src={saveIcon} alt="" style={{height:"20px"}} title="Save " className="mh2 pt2"/>
									<img src={shareIcon} alt=""style={{height:"17px"}} title="Share "className="mh2 pt2 "/>
								</div>
							</div>

						
					</div>
										
				</div>
			</Link>
		);
	}
}

export default ProblemDisplay2;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
