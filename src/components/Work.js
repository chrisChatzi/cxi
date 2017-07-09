import React, { PropTypes } from 'react'

const Work = ( { state, projects, mover, mout, clickProject, filter } ) => (
	<div className="work">
		{/*title*/}
		<div className="titleTop">
			<div id="line" className="line lineTop"></div>
			<div id="" className="text">
				<span className="letters">W</span>
				<span className="letters">o</span>
				<span className="letters">r</span>
				<span className="letters">k</span>
				<span>&nbsp;</span>
				<span className="letters">&</span>
				<span>&nbsp;</span>
				<span className="letters">E</span>
				<span className="letters">x</span>
				<span className="letters">p</span>
				<span className="letters">e</span>
				<span className="letters">r</span>
				<span className="letters">i</span>
				<span className="letters">e</span>
				<span className="letters">n</span>
				<span className="letters">c</span>
				<span className="letters">e</span>
			</div>
			<div id="line2" className="line lineBot"></div>
		</div>
		{/*filters*/}
		<div className="info">
			<div className={(state.filter == "desktop") ? "item active" : "item"}
				onClick={()=>filter("desktop")} title="Click to filter Web Apps">
				<div className="round filterType"><i className='fa fa-desktop'></i></div>
				<h1 className="txt filterTxt">Web app</h1>
			</div>
			<div className={(state.filter == "phone") ? "item active" : "item"}
				onClick={()=>filter("phone")} title="Click to filter Mobile Apps">
				<div className="round filterType"><i className='fa fa-phone'></i></div>
				<h1 className="txt filterTxt">Mobile app</h1>
			</div>
			<div className={(state.filter == "book") ? "item active" : "item"}
				onClick={()=>filter("book")} title="Click to filter Libraries">
				<div className="round filterType"><i className='fa fa-book'></i></div>
				<h1 className="txt filterTxt">JS Library</h1>
			</div>
			<div className={(state.filter == "graduation-cap") ? "item active" : "item"}
				onClick={()=>filter("graduation-cap")} title="Click to filter Education">
				<div className="round filterType"><i className='fa fa-graduation-cap'></i></div>
				<h1 className="txt filterTxt">Education</h1>
			</div>
			<div className={(state.filter == "building") ? "item active" : "item"}
				onClick={()=>filter("building")} title="Click to filter Work History">
				<div className="round filterType"><i className='fa fa-building'></i></div>
				<h1 className="txt filterTxt">Company</h1>
			</div>
		</div>
		{/*timeline*/}
		<div className="timeline">
			<div id="grammh" className="grammh"></div>
			{projects.map( (v,i) =>
				<div className="timeRow" key={i}>
					<div id={"point"+i}
						onMouseOver={()=>mover(i)} onMouseOut={()=>mout(i)}
						className="point" style={{"top" : (i*210)+50+"px"}}></div>
					<div id={"date"+i} className={(i%2==0) ? "date dateRight" : "date dateLeft"}
						onMouseOver={()=>mover(i)} onMouseOut={()=>mout(i)}
						style={{"top" : (i*210)+48+"px"}}>
						{v.date}
					</div>
					<div id={"index"+i} className={(i%2==0) ? "index indexRight" : "index indexLeft"}
						style={{"top" : (i*210)+57+"px"}}></div>
					<div id={"project"+i} onMouseOver={()=>mover(i)} onMouseOut={()=>mout(i)}
						style={{"top" : (i*210)+49+"px"}} onClick={()=>clickProject(i)}
						className={(i%2==0) ? "project projectRight" : "project projectLeft"}>
						<h2 className="title">
							<span className={(state.filter == v.type) ? "highlight active" : "highlight"}>
								{v.name}
							</span>
						</h2>
						<div className={(state.filter == v.type) ? "type active" : "type"} title={v.title}>
							<i className={'fa fa-'+v.type}></i>
						</div>
						<div className="descr">
							{v.descr}
						</div>
						<div className="info">
							{v.lang.map( (vL, iL) =>
								<div className="lang" key={iL}>{vL}</div>
							)}
						</div>
					</div>
				</div>
			)}
		</div>
	</div>
)

export default Work
