/*
	Header component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import WorkC from '../components/Work.js'
import { route, filter_projects } from '../actions.js'
import history from '../history.js'
import { workProjects } from '../constants.js'

function mapStateToProps(state) {
	return {
		route : state.main.path,
		projects : state.main.projects
	};
}

function mapDispatchToProps(dispatch) {
	return {
		route: () => {
			dispatch(route("work"))
		},
		filterProjects: (projects) => {
			dispatch(filter_projects(projects))
		},
	};
}

class Work extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.state = {
			filter : "",
			projects : workProjects
		}

		this.mover = this.moverH.bind(this)
		this.mout = this.moutH.bind(this)
		this.clickProject = this.clickProjectH.bind(this)
		this.filter = this.filterH.bind(this)
	}

	componentDidMount() {
		document.title = "CXI - Work & experience";
		// title 
		for(let i=0; i<document.getElementsByClassName("letters").length; i++){
			((x) => {
				let delay = 0.1 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("letters")[x].style.animation = anime
			})(i)
		}
		//filter
		for(let i=0; i<document.getElementsByClassName("filterType").length; i++){
			((x) => {
				let delay = 0.1 * x;
				let anime = "popup linear 0.5s "+delay+"s 1 forwards";
				let anime2 = "fall linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("filterType")[x].style.animation = anime
				document.getElementsByClassName("filterTxt")[x].style.animation = anime2
			})(i)
		}
		// projects 
		for(let i=0; i<document.getElementsByClassName("point").length; i++){
			((x) => {
				let delay = 0.5 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				let anime2 = "slideLeft linear 0.5s "+delay+"s 1 forwards";
				let anime3 = "slideRight linear 0.5s "+delay+"s 1 forwards";
				let anime4 = "popup linear 0.5s "+delay+"s 1 forwards";
				let anime5 = "slideLeftAndRotate linear 0.5s "+delay+"s 1 forwards";
				let anime6 = "slideRightAndRotate linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("point")[x].style.animation = anime
				if(x%2==0){
					document.getElementsByClassName("date")[x].style.animation = anime2
					document.getElementsByClassName("index")[x].style.animation = anime5
				}else{
					document.getElementsByClassName("date")[x].style.animation = anime3
					document.getElementsByClassName("index")[x].style.animation = anime6
				}
				document.getElementsByClassName("project")[x].style.animation = anime4
			})(i)
		}
		for(let i=0; i<document.getElementsByClassName("lang").length; i++){
			((x) => {
				let delay = 0.3 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("lang")[x].style.animation = anime
			})(i)
		}
		for(let i=0; i<document.getElementsByClassName("type").length; i++){
			((x) => {
				let delay = 1 * x;
				let anime = "letter linear 1s "+delay+"s 1 forwards";
				document.getElementsByClassName("type")[x].style.animation = anime
			})(i)
		}
		////
		let th = 198.18*document.getElementsByClassName("timeRow").length;
		document.getElementById("grammh").style.height = th+"px";

		if(this.props.route != "work") this.props.route();
	}
	//mouse over/out
	moverH(i){
		document.getElementById("project"+i).style.background = "#f5f5f5"
		document.getElementById("date"+i).style.color = "#c99e10";
		document.getElementById("point"+i).style.background = "#c0392b";
		document.getElementById("index"+i).style.background = "#f5f5f5"
	}
	moutH(i){
		document.getElementById("project"+i).style.background = ""
		document.getElementById("date"+i).style.color = "";
		document.getElementById("point"+i).style.background = "";
		document.getElementById("index"+i).style.background = ""
	}
	//click project to open it in new browser tab
	clickProjectH(i){
		let win = window.open(this.state.projects[i].link, '_blank');
		win.focus();
	}
	//filter by type
	filterH(type){
		let newType = (this.state.filter == type) ? "" : type;
		this.setState({filter : newType});
		let projects = workProjects;
		let filteredProjects = [];
		if(newType){
			projects.map( (v,i) => {
				if(v.type.indexOf(type) >= 0) filteredProjects.push(v)
			});
		}else filteredProjects = projects;
		this.props.filterProjects(filteredProjects);
		let th = 210*(filteredProjects.length-1);
		document.getElementById("grammh").style.height = th+50+"px";
	}

	render() {
		return (
			<div>
				<WorkC state={this.state} projects={this.props.projects} 
				mover={this.mover} mout={this.mout} 
				clickProject={this.clickProject} filter={this.filter} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Work);