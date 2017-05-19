/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MainC from '../components/Main.js'
import {  } from '../actions.js'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		lang : state.main.lang
	};
}

function mapDispatchToProps(dispatch) {
	return {
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
	};
}

class Main extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.hashOver = this.hashOverH.bind(this);
		this.hashOut = this.hashOutH.bind(this);
		this.mover = this.moverH.bind(this);

		this.hoverXY = [0,0];

		this.state = {
			box : [
				{
					icon : "desktop",
					title : "Web applications",
					txt : "Modern, scalable, maintainable Web Apps with the use of modern tech stack.",
					hashtags : [
						{
							icon:"mobile",
							txt:"Responsive",
							infoTitle:"Responsive Design",
							infoTxt:"Responsive Web Design makes your web page look good on all devices"+
									" (desktops, tablets, and phones).\n"+
									"Resize, hide, shrink, enlarge, or move the content to make it fit"+
									" on any screen"
						},
						{
							icon:"line-chart",
							txt:"SPA",
							infoTitle:"Single Page Applications",
							infoTxt:"Wrapping the web app in a single page offers faster "+
									"rendering and loading time of the page in the browser.\n"+
									"Resources are dynamically loaded and added to the page as necessary."
						},
						{
							icon:"globe",
							txt:"Multilingual",
							infoTitle:"Website in many languages",
							infoTxt:"Running a unilingual website and a multilingual website demands almost"+
									" the same workload.\n"+
									"Creating a website in many languages does not require "+
									"much effort and has a lot of benefits for the client."

						}
					]
				},
				{
					icon : "mobile",
					title : "Mobile applications",
					txt : "Hybrid mobile apps that can be published on both Google Play and App store.",
					hashtags : [
						{
							icon:"android",
							txt:"Android",
							infoTitle:"Android app",
							infoTxt:"Android apps can be published with little cost and time to the "+
									"Google Play store from where it is available to millions of users."
						},
						{
							icon:"apple",
							txt:"Apple",
							infoTitle:"Apple app",
							infoTxt:"An app can be published to iTunes and grants access to all the "+
									"Apple products users"
						},
						{
							icon:"download",
							txt:"Updates",
							infoTitle:"Mobile App updates",
							infoTxt:"Updating the mobile app with the latest features and bug "+
									" automatically on both Android and Apple store."
						}
					]
				},
				{
					icon : "book",
					title : "Libraries/Plugins",
					txt : "Javascript libraries and plugins. Open-source projects for developers.",
					hashtags : [
						{
							icon:"star",
							txt:"npm",
							infoTitle:"Node Package Manager",
							infoTxt:"If you are a developer you may find useful npm packages for "+
									"frontend or backend development."
						},
						{
							icon:"github",
							txt:"GitHub",
							infoTitle:"GitHub",
							infoTxt:"Pull, star or just check the open-source free to share code examples"+
									" or full applications. The code structuring, the tools used and the "+
									" programming techniques can be useful and tutoring."
						},
						{
							icon:"code",
							txt:"Prototypes",
							infoTitle:"Prototype",
							infoTxt:"Incomplete versions of the web app being developed that can be viewed"+
									" by the client in order to create a valuable feedback that will help"+
									" improve the final released app."
						}
					]
				}
			]
		}
	}

	componentDidMount(e) {
		document.title = "CXI - Web solutions";
		//letters of title
		for(let i=0; i<document.getElementsByClassName("letters").length; i++){
			((x) => {
				let delay = 0.1 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("letters")[x].style.animation = anime
			})(i)
		}
		//boxes
		for(let i=0; i<document.getElementsByClassName("box").length; i++){
			((x) => {
				let delay = 0.5 * x;
				let anime = "popup linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("box")[x].style.animation = anime;
			})(i)
		}
		//hashtags
		for(let i=0; i<document.getElementsByClassName("item").length; i++){
			((x) => {
				let delay = 0.75 * x;
				let anime = "popup linear 0.75s "+delay+"s 1 forwards";
				document.getElementsByClassName("item")[x].style.animation = anime;
			})(i)
		}
	}
	componentWillUnmount() {
		
	}

	hashOverH(block, i){
		let el = document.getElementById("hoverIndex"+block+"-"+i);
		let elMain = document.getElementById("hover"+block+"-"+i);
		el.style.display = "block";
		elMain.style.display = "block";
		el.style.animation = "tsoup 0.5s 1 forwards";
		elMain.style.animation = "tsoup 0.5s 1 forwards";
	}

	hashOutH(block, i){
		let el = document.getElementById("hoverIndex"+block+"-"+i);
		let elMain = document.getElementById("hover"+block+"-"+i);
		el.style.display = "none";
		elMain.style.display = "none";
		el.style.animation = "";
		elMain.style.animation = "";
	}

	moverH(e, i){
		let el = document.getElementById("dover"+i);
		// el.style.display = "block";
		// el.style.top = e.nativeEvent.offsetY+"px";
		// el.style.left = e.nativeEvent.offsetX+"px";
		// el.style.animation = "pulse 1s infinite"
		// this.hoverXY = [e.nativeEvent.offsetX, e.nativeEvent.offsetY]
	}

	render() {	
		return (
			<div>
				<MainC state={this.state} lang={this.props.lang} 
					hashOver={this.hashOver} hashOut={this.hashOut} mover={this.mover} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);