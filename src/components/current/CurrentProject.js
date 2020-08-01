import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";

import CurrentDesc from "./CurrentDesc";

import photo3 from "../../images/train1.jpg";

class CurrentProject extends Component {
	componentWillMount() {
		this.props.dispatch(actions.getCurrent());
	}

	render() {
		const {
			title,
			description,
			tasks,
			concept,
			level,
			author,
		} = this.props.current.current;

		const { current } = this.props.current;
		console.log(tasks);

		return title ? (
			<div className="flex justify-center ">
				{/*<div className="flex">

			        <div className="current ">
			          <h2 className= 'tet  mb3 dark-gray' >{title}</h2>
			          <h3 className="t">{concept}</h3>
			          <h1 className="fw1 f2 mb0"> 16 : 42 <span className="f5 dark-gray">hr left</span></h1>
					<h1 className="fw1 f5 ml2"> 1 / 7 <span className="f7 dark-gray">completed</span></h1>
			          <button className="learn-more-btn  shadow-5">Live Demo</button>
			          <button className="learn-more-btn shadow-5">Pending</button>
			          <p className="mv f7 mid-gray"></p>
			        </div>
				</div> */}
				<div>
					<TimeCard />
				</div>

				<div>
					<CurrentDesc project={current} />
				</div>

				<div>
					<CurrentRM project={current} />
				</div>
			</div>
		) : (
			<h2 className="h4 tc ml5 fw1">Loading...</h2>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		current: state.currentReducer,
	};
};

export default connect(mapStateToProps)(CurrentProject);
