/*
	Contact component
*/

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ContactC from '../components/Contact.js'
import { route } from '../actions.js'
import ajax from 'ajax-query'
import history from '../history.js'

function mapStateToProps(state) {
	return {
		route : state.main.path
	};
}

function mapDispatchToProps(dispatch) {
	return {
		route: () => {
			dispatch(route("contact"))
		},
		change_path: (category, product, categories) => {
			if(product) dispatch(get_products_frontend(category, product))
			dispatch(change_path(category, product, categories))
		},
	};
}

class Contact extends Component {
	static get propTypes() {
		return {

		}
	}

	constructor(props) {
		super(props);

		this.interval = 0;
		this.hoveredEl = "";

		this.state = {
			name : "",
			mail : "",
			title : "",
			txt : "",
			nameCheck : false,
			mailCheck : false,
			txtCheck : false
		}

		this.nameGo = this.nameGoH.bind(this);
		this.mailGo = this.mailGoH.bind(this);
		this.titleGo = this.titleGoH.bind(this);
		this.txtGo = this.txtGoH.bind(this);
		this.msg = this.msgH.bind(this);
		this.socialOver = this.socialOverH.bind(this);
		this.socialOut = this.socialOutH.bind(this);
		this.socialClick = this.socialClickH.bind(this);
	}

	componentDidMount(e) {
		document.title = "CXI - Contact";
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
				let anime = "contact"+(x+1)+" linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("box")[x].style.animation = anime;
			})(i)
		}
		//titles
		for(let i=0; i<document.getElementsByClassName("words").length; i++){
			((x) => {
				let delay = 1 + 0.1 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("words")[x].style.animation = anime
			})(i)
		}
		//send message
		for(let i=0; i<document.getElementsByClassName("row").length; i++){
			((x) => {
				let delay = 0.5 + 0.1 * x;
				let anime = "letter linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("row")[x].style.animation = anime
			})(i)
		}
		for(let i=0; i<document.getElementsByClassName("msg-icon").length; i++){
			((x) => {
				let delay = 1 + 0.5 * x;
				let anime = "popup linear 0.5s "+delay+"s 1 forwards";
				document.getElementsByClassName("msg-icon")[x].style.animation = anime
			})(i)
		}
		//cube
		let x = 1;
		let elCube = document.getElementById("cube");
		this.interval = setInterval(()=>{
			elCube.style.animation = "spinLeft"+x+" linear 1s 1 forwards";
			x++;
			if(x == 5) x = 1;
		}, 4000);

		if(this.props.route != "contact") this.props.route();
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}
	

	nameGoH(e){ this.setState({name : e.target.value}); this.checkForm(); }
	mailGoH(e){ this.setState({mail : e.target.value}); this.checkForm(); }
	titleGoH(e){ this.setState({title : e.target.value}); this.checkForm(); }
	txtGoH(e){ this.setState({txt : e.target.value}); this.checkForm(); }

	checkForm(){
		let error = false;
		this.setState({
			nameCheck : false,
			mailCheck : false,
			txtCheck : false
		});
		if(this.state.name.length < 1){
			this.setState({nameCheck : true});
			error = true;
		}
		if(this.state.mail.length < 6
			|| this.state.mail.indexOf('@') < 0
			|| this.state.mail.indexOf('.') < 0){
			this.setState({mailCheck : true});
			error = true;
		}
		if(this.state.txt.length < 1){
			this.setState({txtCheck : true});
			error = true;
		}

		return error;
	}

	msgH(){
		let error = this.checkForm();
		if(!error){
			let options = {
				url : "/sendMsg",
				type : "POST",
				contentType : "application/json; charset=utf-8",
				data : {
					"name" : this.state.name,
					"email" : this.state.mail,
					"title" : this.state.title,
					"txt" : this.state.txt
				}
			};
			ajax.ajaxRequest(options, (res) => {
				if(res.type == "ok") alert("Message has been sent");
			}); 
		}
	}

	//social mouse over/out
	socialOverH(e, i){
		if(this.hoveredEl != i){
			let el = document.getElementById("cube"+i);
			el.style.animation = "spinVertical linear 0.5s 1 forwards";
		}
		this.hoveredEl = i;
	}
	socialOutH(i){
		this.hoveredEl = 0;
		let el = document.getElementById("cube"+i);
		el.style.animation = "spinVerticalOut linear 0.5s 1 forwards";
	}
	socialClickH(i){
		let win = "";
		switch(i){
			case 2: 
				win = window.open("https://github.com/chrisChatzi", '_blank');
				win.focus();
			break;
			case 3: 
				win = window.open("https://www.npmjs.com/~christos.chatzi", '_blank');
				win.focus();
			break;
			case 4: 
				win = window.open("https://www.linkedin.com/in/christos-chatziioannidis-097a2166/", '_blank');
				win.focus();
			break;
		}
	}

	render() {	
		let { nameGo, mailGo, titleGo, txtGo, msg, socialOver, socialOut, socialClick } = this

		return (
			<div>
				<ContactC state={this.state} lang={this.props.lang}
				nameGo={nameGo} mailGo={mailGo} titleGo={titleGo} txtGo={txtGo}
				msg={msg} socialOver={socialOver} socialOut={socialOut} socialClick={socialClick} />
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);