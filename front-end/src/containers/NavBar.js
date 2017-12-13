import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component{
	constructor(){
		super();
	}
	componentWillReceiveProps(newProps){
		if(newProps.auth.name !== undefined){

		}
	}


	render(){
		if(this.auth.name !== undefined){
			var rightMenuBar = [
			<li className="">Welcome, {this.props.auth.name}</li>

			]
		}
		console.log(this.props.auth)
		return(
			<div id="navbar">
				<nav className="navbar navbar-fixed-top">
			  		<div className="container-fluid navbar-white">
			  			<div className="container">
				    		<ul className="nav navbar-nav">
				    			<li><Link to="/">Home</Link></li>
				    			<li><Link to="/shop">Shop</Link></li>
				    			<li><Link to="/about">About Us</Link></li>
				    			<li><Link to="/contact">Contact Us</Link></li>
				    		</ul>
				    	</div>
			    	</div>
			    	<div className="container-fluid navbar-default">
			    		<div className="container">
			    			<div className="nav navbar-header">
			    				ClassicModels Logo
			    			</div>
			    			<div className="nav navbar-nav pull-right">
			    				<li><Link to="/login">Sign in</Link> or <Link to="/register">Create an account</Link></li>
			    				<li>(0) items in cart | ($0.00)</li>
			    			</div>
			    		</div>
			    	</div>
			    </nav>
			</div>
		)
	}
}
function mapDispatchToProps(dispatch){
	// dispatch is teh thing that takes any action
	// and sends it out to all teh reducers	
	return bindActionCreators({
		authAction: AuthAction
	})
}

export default connect(mapStateToProps)(NavBar)
export default NavBar;