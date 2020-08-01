import React, { Component } from "react";
import axios from "axios";

import "../../App.css";
import saveIcon from "../../images/saveIcon.png";
import shareIcon from "../../images/shareIcon.png";



import { Link } from "react-router-dom";

const limitProjectTitle = (title, limit = 200) => {
	const newTitle = [];
	if (title.length > limit) {
		title.split(" ").reduce((acc, cur) => {
			if (acc + cur.length <= limit) {
				newTitle.push(cur);
			}
			return acc + cur.length;
		}, 0);

		// return the result
		return `${newTitle.join(" ")} ...`;
	}
	return title;
};


class ProblemDisplay extends Component {
	render() {
		let { title,image, folder, text , createdAt} = this.props.project;
		
		


		return (
			<Link className="no-underline mb5" to={`/`}>
				<div className=" br4  flex flex-column justify-between mb2  bg-white" style={{width:"45vw" }}>

						<h2 className="f7 pa4 pv5 ma0  br4 black-80" style={{fontSize:'0.85em', background:'#00000009'}}>{text}</h2>						
					<div className="">
							<h2 className="b mh3 fm pa2 black " style={{fontSize:'0.7em'}}>{title}</h2>

							<div className="flex justify-between">
								<h2 className="b mh3 fm pa2 pv0 black-60 mb2" style={{fontSize:'0.55em' ,paddingTop:'1vh'}}>{createdAt}</h2>
								<div className="s-s-icon flex">
									<h2 className="f7 black-80 fm pb3 mh3">0 Comments</h2>
									<img src={saveIcon} alt="" title="Save" style={{height:"20px"}} className="mh2 pt2"/>
									<img src={shareIcon} alt="" title="Share " style={{height:"17px"}} className="mh2 pt2 "/>
								</div>
							</div>

						
					</div>
										
				</div>
			</Link>
		);
	}
}

export default ProblemDisplay;

{
	/*<div dangerouslySetInnerHTML={{ __html: description }} /> */
}
