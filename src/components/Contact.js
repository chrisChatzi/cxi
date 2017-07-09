import React, { PropTypes } from 'react'

const Contact = ( { state, lang, nameGo, mailGo, titleGo, txtGo, msg,
					socialOver, socialOut, socialClick } ) => (
	<div className="contact">
		{/*title*/}
		<div className="titleTop">
			<div id="line" className="line lineTop"></div>
			<div id="" className="text">
				<span className="letters">C</span>
				<span className="letters">o</span>
				<span className="letters">n</span>
				<span className="letters">t</span>
				<span className="letters">a</span>
				<span className="letters">c</span>
				<span className="letters">t</span>
			</div>
			<div id="line2" className="line lineBot"></div>
		</div>
		{/*msg*/}
		<div className="msg">
			{/*send msg*/}
			<div className="half">
				<div className="msg-icon"><i className="fa fa-2x fa-envelope"></i></div>
				<h1 className="msg-title">
					<span className="words">Send</span>
					<span className="words">a</span>
					<span className="words">message</span>
				</h1>
				<div className="msg-main">
					<div className="row">
						<input className={(state.nameCheck ? "error" : "")} type="text"
							placeholder="Name" value={state.name} onChange={nameGo} />
					</div>
					<div className="row">
						<input className={(state.mailCheck ? "error" : "")} type="text"
							placeholder="Email" value={state.mail} onChange={mailGo}/>
					</div>
					<div className="row">
						<input type="text"
							placeholder="Title"  value={state.title} onChange={titleGo}/>
					</div>
					<div className="row txt">
						<textarea className={(state.txtCheck ? "error" : "")}
							placeholder="Message" value={state.txt} onChange={txtGo}/>
					</div>
					<div className="row send"><button onClick={msg}>Send</button></div>
				</div>
			</div>
			<div className="half">
				{/*info cube*/}
				<div className="infoCube">
					<div className="wrap">
						<div id="cube" className="cube">
							<div className="item front">
								<div className="icon"><i className="fa fa-2x fa-question-circle"></i></div>
								<div className="title">Questions</div>
								<div className="txt">
									Ask any questions including pricing, development, timelines, features etc.
								</div>
							</div>
							<div className="item back">
								<div className="icon"><i className="fa fa-2x fa-bug"></i></div>
								<div className="title">Bugs</div>
								<div className="txt">
									Ask for help for the identification and solving of bugs in your app
								</div>
							</div>
							<div className="item top">top</div>
							<div className="item bottom">bottom</div>
							<div className="item left">
								<div className="icon"><i className="fa fa-2x fa-search"></i></div>
								<div className="title">Market research</div>
								<div className="txt">
									Get an idea of the market of your business from a technology point of view
								</div>
							</div>
							<div className="item right">
								<div className="icon"><i className="fa fa-2x fa-graduation-cap"></i></div>
								<div className="title">Advice</div>
								<div className="txt">
									Advices regarding development choices
								</div>
							</div>
						</div>
					</div>
				</div>
			{/*social*/}
				<div className="social">
					{/*github*/}
					<div className="wrap2">
						<div className="cube2">
							<div id="cube2" className="spinner"
							onClick={()=>socialClick(2)} onMouseOver={(e)=>socialOver(e, 2)}
							onMouseOut={()=>socialOut(2)}>
								<div className="face1">
									<img src="../img/logos/github.png" />
								</div>
								<div className="face2"></div>
								<div className="face3"></div>
								<div className="face4"></div>
								<div className="face5"></div>
								<div className="face6">GitHub</div>
							</div>
						</div>
					</div>
					{/*npm*/}
					<div className="wrap2">
						<div className="cube3">
							<div id="cube3" className="spinner"
							onClick={()=>socialClick(3)}
							onMouseOver={(e)=>socialOver(e, 3)} onMouseOut={()=>socialOut(3)}>
								<div className="face1">
									<img src="../img/logos/npm.png" />
								</div>
								<div className="face2"></div>
								<div className="face3"></div>
								<div className="face4"></div>
								<div className="face5"></div>
								<div className="face6">npm</div>
							</div>
						</div>
					</div>
					{/*linkedin*/}
					<div className="wrap2">
						<div className="cube4">
							<div id="cube4" className="spinner"
							onClick={()=>socialClick(4)}
							onMouseOver={(e)=>socialOver(e, 4)} onMouseOut={()=>socialOut(4)}>
								<div className="face1">
									<img src="../img/logos/linkedin.png" />
								</div>
								<div className="face2"></div>
								<div className="face3"></div>
								<div className="face4"></div>
								<div className="face5"></div>
								<div className="face6">LinkedIn</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
)

export default Contact
