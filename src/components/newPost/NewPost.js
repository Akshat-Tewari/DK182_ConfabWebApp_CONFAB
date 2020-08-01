import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import image from "../../images/premium.png";

import "../../App.css";

class NewPost extends Component {
	constructor() {
		super();
		this.state = {
			title: "",
			text: "",

			redirect: false,
			errors: [],
		};
	}

	formChange = (event) => {
		switch (event.target.name) {
			case "url":
				this.setState({ title: event.target.value });
				break;
			case "text":
				this.setState({ text: event.target.value });
				break;
			case "default":
				return;
		}
	};

	createNew = (userData) => {
		actions
			.createNewPost(this.state)
			.then(
				(created) => this.setState({ redirect: true }),
				(errors) => this.setState({ errors })
			);
	};

	render() {
		const { errors, redirect } = this.state;

		{
			if (redirect) {
				return (
					<Redirect
						to={{
							pathname: "/",
							state: { successRegister: true },
						}}
					/>
				);
			}
		}

		return (
			<div className="flex " style={{}}>
				<div
					className="NP-heading bl bw1 b--hot-pink mh5 mv3 "
					style={{ height: "10vh", marginTop: "10vh" }}
				>
					<h2 className="f4 ttu hot-pink ph3">New Post</h2>
				</div>

				<div className="flex fm flex-column mt5 mh6 pl5">
					<label className="ma3 f7 fw7 ttu black-70 ml0">URL</label>
					<textarea
						className=" np-input-u"
						type="text"
						name="url"
						placeholder="Paste the URL"
						onChange={this.formChange}
					/>
					<label className="ma3 f7 fw7 ttu black-80 ml0">
						Post Data
					</label>
					<textarea
						className=" np-input-t"
						type="text"
						name="text"
						placeholder="Write Something..."
						onChange={this.formChange}
					/>

					<div className="flex">
						<button
							className=" white mt4 fw7 ttu no bn br4 bg-hot-pink f7 mr3"
							style={{
								background: "#ea526f",
								width: "100px",
								height: "50px",
							}}
							onClick={this.createNew}
						>
							Create
						</button>

						<button
							className=" black mt4 fw7 no ttu border-light f7 br4"
							style={{ background: "#fff" ,width: "100px",
								height: "50px",}}
						>
							cancel
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default NewPost;
