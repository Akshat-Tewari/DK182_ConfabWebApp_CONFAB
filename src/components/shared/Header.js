import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

import profileIcon from "../../images/profileIcon.svg";
import logoutIcon from "../../images/logoutIcon.png";
import saveIcon from "../../images/saveIcon.png";
import avatar from "../../images/avatar.png";
import searchIcon from "../../images/searchIcon.png";
import scrollDown from "../../images/scrollDownIcon.png";

import "../../App.css";

class Header extends Component {

  handleLogout = () => {
    this.props.logout();
  };

 
  renderAuthButtons = () => {
    const { isAuth } = this.props.auth;
    if (isAuth) {
      return (
         <React.Fragment>
             <div className=" flex   justify-between">
                     {/*} <Link className="  link" to="/current">Current</Link>
                      <Link className="  link" to="/finished">Finished</Link>
                      <Link className="  link" to="/">Contribute</Link>
                      <Link className="  link" to="/">Blogs</Link>
                       <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link>
                        */}
                          <input type="text" className="search-box" placeholder="Search"/>
    
                      <Link to="/cart">
                        <img src={saveIcon} alt="" className="mt2 mh3   " style={{width:'22px' , height:'22px'}}/>  
                      </Link>
                      <div className="flex">
                        <img src={avatar} alt="" className="" style={{width:'35px' , height:'35px'}}/>
                        <img src={scrollDown} alt="" className="mt2 pt1 ml1" style={{width:'15px' , height:'15px'}}/>
                        
                      </div>
                      <button
                              className="  login-btn  no "
                              onClick={this.handleLogout}>
                                     <h2 className="ttu fw6 " style={{fontSize:'0.8em' , margin:'0 10px'}}>Log Out</h2>

                      </button> 
                     
              </div>
          </React.Fragment>
      );
    }else{
      return(
         <React.Fragment>
              <div className=" flex  justify-between ">
                  {/* <Link className=" no-underline  dark-gray f6 fw6 pa1 pr4 link" to="/">My Profile</Link> */}

                  <Link className="login-btn  no " to="/login" onClick={this.changeModalState} >Log In</Link>
                  <Link className="register-btn  no" to="/register">Sign Up</Link>
              </div>
         </React.Fragment>
        );
    }
  };

  render() {
    return (
      <nav className="header l  black flex justify-between">
        
        <button className="logo l no">CF</button>
        <a
          className=" no-underline dark-gray  flex ites-center "
          href="/"
        >
          <h2 className=" pa0 ma0 pl6 fw6 black-90" style={{ fontSize:'20px' ,  letterSpacing:'1px'}}>ConFab</h2>
        </a>
        <div className="items-center ">
          {this.renderAuthButtons()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.authReducer
  };
}

export default withRouter(connect(mapStateToProps)(Header));
