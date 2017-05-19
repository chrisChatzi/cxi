/*
	Header component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HeaderC from '../components/Header.js'
import { route } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		lang : state.main.lang,
		path : state.main.path
	};
}

function mapDispatchToProps(dispatch) {
	return {
		route: (path) => {
			dispatch(route(path))
		},
	};
}

class Header extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.state = {
			mobileShowMenu : false
		}

		this.route = this.routeH.bind(this);
		this.openMobileMenu = this.openMobileMenuH.bind(this);
	}

	componentDidMount() {
		document.getElementById("head1").style.animation = "tsoup 1s 0s 1 forwards";
		document.getElementById("head2").style.animation = "tsoup 1s 0.25s 1 forwards";
		document.getElementById("head3").style.animation = "tsoup 1s 0.5s 1 forwards";
	}
	componentWillUnmount() {
		
	}
	//change route
	routeH(path){
		this.props.route(path)
		history.push("/"+path);
	}
	//open mobile menu
	openMobileMenuH(){
		this.setState({mobileShowMenu : !this.state.mobileShowMenu})
	}

	render() {	
		return (
			<div>
				<HeaderC a state={this.state} lang={this.props.lang} path={this.props.path} 
				route={this.route} openMobileMenu={this.openMobileMenu} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);