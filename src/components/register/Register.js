import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import image from '../../images/premium.png';

import "../../App.css";

class Register extends Component {
	constructor() {
		super();
		this.state = {
			username: "",
			email: "",
			password: "",

			redirect: false,
			errors: []
		};
	}

	formChange = event => {
		switch (event.target.name) {
			case "username":
				this.setState({ username: event.target.value });
				break;
			case "email":
				this.setState({ email: event.target.value });
				break;
			case "password":
				this.setState({ password: event.target.value });
				break;
			case "default":
				return;
		}
	};

	registerUser = userData => {
		actions
			.register(this.state)
			.then(
				registered => this.setState({ redirect: true }),
				errors => this.setState({ errors })
			);
	};

	render() {
		const { errors, redirect } = this.state;

		{

			if (redirect) {
				return (
					<Redirect
						to={{
							pathname: "/login",
							state: { successRegister: true }
						}}
					/>
				);
			}
		}

		return (
			<div className="flex fm justify-around mt2 pa4" style={{marginLeft:'auto' , marginRight:'auto'}}>
				
				<div className="photo dn dib-ns ">
					<h1 className="f4 fw1 tc fw8 black-20 l 1h-heading pt4">Highlight Your Work with Confab </h1>
					<img src={image} alt="" className="illustration " style={{height:'66vh'}}/>
				</div>
				
				<div className="flex fm flex-column mt3 mt4-ns">
					<h3 className="  fw7 ttu f5 ma3 l black-80 ">Get Started For Free</h3>
					<label className="ma3 f7 fw7 ttu black-80 ml0">Username</label>
					<input
						className=" login-input"
						type="text"
						name="username"
						placeholder="Enter your Name"

						onChange={this.formChange}
					/>
					<label className="ma3 f7 fw7 ttu black-80 ml0">Email</label>
					<input
						className=" login-input"
						type="email"
						name="email"
						placeholder="Enter your Email"

						onChange={this.formChange}
					/>
					<label className="ma3 f7 fw7 ttu black-80 ml0">Password</label>
					<input
						className=" login-input"
						type="password"
						name="password"
						placeholder="Enter your Password"
						onChange={this.formChange}
					/>

					<button
						className="login-input white mt4 fw7 ttu "
						style={{background:'#ea526f'}}
						onClick={this.registerUser}
					>
						SignUP
					</button>
				</div>
				
			</div>
		);
	}
}

export default Register;
