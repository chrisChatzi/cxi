/*
	Main component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TechC from '../components/Tech.js'
import { route } from '../actions.js'

function mapStateToProps(state) {
	return {
		route : state.main.path,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		route: () => {
			dispatch(route("tech"))
		},
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
	};
}

class Tech extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		document.title = "CXI - Tech stack";

		this.timer = 0;
		this.timeout = 0;

		this.state = {
			active : "front",
			hover : "",
			front : [
				{
					type : "js",
					title : "Javascript",
					img : "../img/logos/js.png",
					info : ["ECMAScript", "5 years exp", "Functional"],
					back : "../img/jsb.jpg"
				},
				{
					type : "react",
					title : "React",
					img : "../img/logos/react.png",
					back : "../img/reactb.jpg",
					info : ["MVC control", "1,5 years exp", "JS Library"]
				},
				{
					type : "redux",
					title : "Redux",
					img : "../img/logos/redux.png",
					back : "../img/reduxb.jpg",
					info : ["App state management", "1,5 years exp", "JS Library"]
				},
				{
					type : "html",
					title : "HTML5",
					img : "../img/logos/html5.png",
					back : "../img/htmlb.jpg",
					info : ["Markup language", "5 years exp", "Web"]
				},
				{
					type : "css",
					title : "CSS3",
					img : "../img/logos/css3.png",
					back : "../img/cssb.jpg",
					info : ["Styling", "5 years exp", "Animations"]
				},
				{
					type : "sass",
					title : "Sass",
					img : "../img/logos/sass.png",
					back : "../img/sassb.jpg",
					info : ["CSS extension", "2 years exp", "CSS with superpowers"]
				},
				{
					type : "es6",
					title : "ES6",
					img : "../img/logos/es6.png",
					back : "../img/es6b.jpg",
					info : ["MVC control", "2 years exp", "Modern JS"]
				},
				{
					type : "karma",
					title : "Karma",
					img : "../img/logos/karma.png",
					back : "../img/karmab.jpg",
					info : ["Testing", "2 years exp", "Test runner"]
				},
				{
					type : "grunt",
					title : "Grunt",
					img : "../img/logos/grunt.png",
					back : "../img/gruntb.jpg",
					info : ["Automation", "2 years exp", "Task runner"]
				},
			],
			back : [
				{
					type : "node",
					title : "Node.js",
					img : "../img/logos/node.png",
					info : ["Server-side", "1,5 years exp", "Lightweight"]
				},
				{
					type : "express",
					title : "Express",
					img : "../img/logos/express.png",
					info : ["Web app framework", "1,5 years exp", "Minimalistic"]
				},
				{
					type : "sql",
					title : "SQLite",
					img : "../img/logos/sql.png",
					info : ["Managing data", "2 years exp", "RDBMS"]
				},
				{
					type : "mongo",
					title : "mongoDB",
					img : "../img/logos/mongo.png",
					info : ["Database", "2 years exp", "JSON-like documents"]
				},
				{
					type : "java",
					title : "Java",
					img : "../img/logos/java.png",
					info : ["JVM", "1,5 years exp", "Object-oriented"]
				},
				{
					type : "rest",
					title : "RESTful",
					img : "../img/logos/rest.png",
					info : ["Web services", "3 years exp", "Stateless operations"]
				},
				{
					type : "ajax",
					title : "AJAX",
					img : "../img/logos/ajax.png",
					info : ["Asynchronous", "3 years exp", "Retrieve data"]
				},
				{
					type : "heroku",
					title : "Heroku",
					img : "../img/logos/heroku.png",
					info : ["Cloud", "1,5 years exp", "Platform-as-a-Service"]
				},
			]
		}

		this.hover = this.hoverH.bind(this);
		this.hoverType = this.hoverTypeH.bind(this);
		this.houtType = this.houtTypeH.bind(this);
		this.tab = this.tabH.bind(this);
	}

	componentDidMount(e) {
		document.title = "CXI - Tech stack";
		//letters of title
		for(let i=0; i<document.getElementsByClassName("letters").length; i++){
			((x) => {
				let delay = 0.1 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("letters")[x].style.animation = anime
			})(i)
		}
		//blocks
		for(let i=0; i<document.getElementsByClassName("block").length; i++){
			((x) => {
				let delay = 0.3 * x;
				let anime = "popupShake linear 0.75s "+delay+"s 1 forwards";
				document.getElementsByClassName("block")[x].style.animation = anime
			})(i)
		}
		for(let i=0; i<document.getElementsByClassName("block2").length; i++){
			((x) => {
				let delay = 0.3 * x;
				let anime = "popupShake linear 0.75s "+delay+"s 1 forwards";
				document.getElementsByClassName("block2")[x].style.animation = anime
			})(i)
		}

		if(this.props.route != "tech") this.props.route();
	}

	componentWillUnmount(){
		clearInterval(this.timer);
		clearTimeout(this.timeout);
	}

	hoverH(type){
		this.setState({hover : type});
	}
	hoverTypeH(i, type){
		clearInterval(this.timer);
		clearTimeout(this.timeout);
		let x=2;
		let img = (type == "f") ? document.getElementById("img-"+i):document.getElementById("imgB-"+i);
		img.style.animation = "drop linear 0.5s 1 forwards";
		this.timeout = setTimeout(()=>{
			this.hoverTypeFunc(x, i, type);
			this.timer = setInterval(()=> {
				x++;
				if(x == 5) x = 1;
				this.hoverTypeFunc(x, i, type);
			}, 2000);
		}, 1000);
	}
	hoverTypeFunc(x, i, type){
		let el1 = (type == "f") ? document.getElementById("info1-"+i):document.getElementById("infoB1-"+i);
		let el2 = (type == "f") ? document.getElementById("info2-"+i):document.getElementById("infoB2-"+i);
		let el3 = (type == "f") ? document.getElementById("info3-"+i):document.getElementById("infoB3-"+i);
		let el4 = (type == "f") ? document.getElementById("info4-"+i):document.getElementById("infoB4-"+i);

		el1.style.transform = "rotateX(180deg)";
		el2.style.transform = "rotateX(180deg)";
		el3.style.transform = "rotateX(180deg)";
		el4.style.transform = "rotateX(180deg)";
		switch(x){
			case 1: el1.style.transform = "rotateX(0)"; break;
			case 2: el2.style.transform = "rotateX(0)"; break;
			case 3: el3.style.transform = "rotateX(0)"; break;
			case 4: el4.style.transform = "rotateX(0)"; break;
		}
	}
	houtTypeH(i){
		clearInterval(this.timer);
	}
	tabH(type){
		this.setState({active : type});
	}

	render() {
		return (
			<div>
				<TechC state={this.state} lang={this.props.lang}
					hover={this.hover} tab={this.tab}
					hoverType={this.hoverType} houtType={this.houtType} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Tech);
