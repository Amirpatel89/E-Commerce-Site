import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button, Col ,MenuItem} from 'react-bootstrap'
// this is a container that knows abotu redux so...
import {connect} from 'react-redux';
// we need bindActionCreators because we have redux actions that will dispatch
import {bindActionCreators} from 'redux';


class Cart extends Component{
	constructor(){

	}
	render(){
		if(this.props.auth.name !== undefined){
			// the user is logged in
			
		}else{

		}
	}
}