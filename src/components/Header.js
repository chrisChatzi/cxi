import React, { PropTypes } from 'react'

const Header = ( { a, state, lang, path, route, openMobileMenu } ) => (
	<div className="header">
		<div className="desktop">
			<div className="logo"  onClick={()=>route("")}>CXI</div>
			<div id="head3" className={(path == "contact") ? "right on" : "right"} 
				onClick={()=>route("contact")}>{lang.head[2]}</div>
			<div id="head2" className="right" className={(path == "work") ? "right on" : "right"} 
				onClick={()=>route("work")}>{lang.head[1]}</div>
			<div id="head1" className="right" className={(path == "tech") ? "right on" : "right"} 
				onClick={()=>route("tech")}>{lang.head[0]}</div>
				<div>{a}</div>
		</div>
		<div className="mobile">
			<div className="logo"  onClick={()=>route("")}>CXI</div>
			<div className="mobileBar" onClick={openMobileMenu}><i className="fa fa-bars"></i></div>
			<div className={(state.mobileShowMenu) ? "mobileMenu" : "mobileMenu off"}>
				<div className="row" onClick={()=>route("tech")}>{lang.head[0]}</div>
				<div className="row" onClick={()=>route("work")}>{lang.head[1]}</div>
				<div className="row" onClick={()=>route("contact")}>{lang.head[2]}</div>
			</div>
		</div>
	</div>
)

export default Header