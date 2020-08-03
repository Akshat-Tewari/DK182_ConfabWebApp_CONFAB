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

			<Link className="no-underline p-d mb5" to={`/`}>
				<div className=" br4  flex flex-column justify-between mb2  bg-white">
						{image 	? <img src={image} alt=""/> 
								: <h2 className="f7  pa4 pv5 pv5-ns ma0  br4 black-80" style={{fontSize:'0.85em', background:'#00000009'}}>{text}</h2>
						}						
					<div className="">
							<Link href={title}><h2 className="b mh3 fm pa0 mw2 pa2-ns black " style={{fontSize:'0.7em'}}>{title}</h2></Link>

							<div className="flex justify-between">
								<h2 className="b mh3 fm pa2 pv0 black-60 mb2" style={{fontSize:'0.55em' ,paddingTop:'1vh'}}>{createdAt}</h2>
								<div className="s-s-icon flex">
									<h2 className="f7 black-80 fm pb3 mh3 dn dib-ns">0 Comments</h2>
									<img src={saveIcon} alt="" title="Save" style={{height:"20px"}} className="mh2 pt2"/>



									<div class="dropdown">
              							<div className="flex dropbtn">
											<img src={shareIcon} alt="" title="Share " style={{height:"17px"}} className="mh2 pt2 "/>
           								</div>
							              <div class="dropdown-content2  f7 tc ph2 pv5">
											<img src={shareIcon} alt="" title="Share " style={{height:"25px"}} className="mh2 pt2 "/>
								             <p className="f6 black-70">Add Your Peers to Share</p>
							              </div>
							            </div>
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
