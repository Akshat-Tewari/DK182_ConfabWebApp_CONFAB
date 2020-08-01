import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";
import { Link } from "react-router-dom";

import image from '../../images/humaaans.png';
import "../../App.css";

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: "",
			password: ""
		};
	}

	formChange = event => {
		switch (event.target.name) {
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

	loginUser = userData => {
		this.props.dispatch(actions.login(this.state));

	};

	
	render() {
		const { isAuth, errors } = this.props.auth;

		if (isAuth) {
			return <Redirect to={{ pathname: "/" }} />;
		}

		return (
			<div className=" flex fm justify-around mt2 pa4 " style={{marginLeft:'auto' , marginRight:'auto'}}>

				<div className="photo ">
				
					<h1 className="f2 tc  fw8 black-10 l 1h-heading pb2">Save Share Explore</h1>
					<img src={image} alt="" className="illustration " style={{height:'50vh'}}/>

				</div>

				<div className="flex fm flex-column mt5 ">
					<h3 className=" fw7 ttu f5 l ma3 ml0 black-80">
						Welcome Back ❤
					</h3>

					<label className="ma3 f7 fw7 ttu black-80 ml0">Email</label>
					<input
						className=" login-input"
						type="email"
						name="email"
						placeholder="Enter your email"
						onChange={this.formChange}
					/>
					<label className="ma3 f7 ttu fw7 black-80 ml0">Password</label>
					<input
						className="login-input"
						type="password"
						name="password"
						placeholder="Enter your Password"
						onChange={this.formChange}
					/>

					<div className="flex">

						<div className="ma1 pl2">
						<input type="checkbox" />
								
						</div>
						<p className= "black-60 pa1 ma1" style={{fontSize:'0.7em'}}>Keep me Signed in</p>
					</div>

					<button
						className="login-input white mt4 fw8 ttu "
						style={{background:'#ea526f'}}
						onClick={this.loginUser}
					>
						Log In
					</button>



					<h2 className="tc pt3 f7 fw1 gray">forget password ? <a href="/" className="no-underline tu">click here</a></h2>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.authReducer
	};
}

export default connect(mapStateToProps)(Login);
