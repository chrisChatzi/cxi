import React, { PropTypes } from 'react'

const Tech = ( { state, lang, hover, tab, hoverType, houtType } ) => (
	<div className="tech">
		{/*title*/}
		<div className="titleTop">
			<div id="line" className="line lineTop"></div>
			<div id="" className="text">
				<span className="letters">T</span>
				<span className="letters">e</span>
				<span className="letters">c</span>
				<span className="letters">h</span>
				<span>&nbsp;</span>
				<span className="letters">S</span>
				<span className="letters">t</span>
				<span className="letters">a</span>
				<span className="letters">c</span>
				<span className="letters">k</span>
			</div>
			<div id="line2" className="line lineBot"></div>
		</div>
		{/*main*/}
		{/*buttons*/}
		<div className="buttons">
			<h1 className={(state.active == "front") ? "button active" : "button"}
				onClick={()=>tab("front")}>
				Frontend
			</h1>
			<h1 className={(state.active == "back") ? "button active" : "button"}
				onClick={()=>tab("back")}>
				Backend
			</h1>
		</div>
		{/*grid*/}
			<div className="grid">
			{/*front*/}
				<div className={(state.active == "front") ? "front show" : "front hidden"}>
					{state.front.map( (v, i) =>
						<div key={i} className={"block "+v.type}
							onMouseOver={()=>hover(v.type)} onMouseOut={()=>hover("")}>
							<div className={(state.hover == v.type) ? "font hidden" : "font show"}>
								<div className="img">
									<img src={v.img} />
								</div>
								<div className="title">{v.title}</div>
							</div>
							<div className={(state.hover == v.type) ? "content show " :
										"content hidden "}
								onMouseOver={()=>hoverType(i,"f")} onMouseOut={()=>houtType(i)}>
									<div id={"info1-"+i} className="small">
										<img id={"img-"+i} src={v.img} />
									</div>
									{v.info.map( (v,iI) =>
										<div key={iI} id={"info"+(iI+2)+"-"+i} className="small smallHidden">
											{v}
										</div>
									)}
							</div>
						</div>
					)}
				</div>
			{/*back*/}
				<div className={(state.active == "back") ? "back show" : "back hidden"}>
					{state.back.map( (v, i) =>
						<div key={i} className={"block2 "+v.type}
							onMouseOver={()=>hover(v.type)} onMouseOut={()=>hover("")}>
							<div className={(state.hover == v.type) ? "font hidden" : "font show"}>
								<div className="img"><img src={v.img} /></div>
								<div className="title">{v.title}</div>
							</div>
							<div className={(state.hover == v.type) ? "content show "+v.type :
										"content hidden "+v.type}
								onMouseOver={()=>hoverType(i,"b")} onMouseOut={()=>houtType(i)}>
									<div id={"infoB1-"+i} className="small">
										<img id={"imgB-"+i} src={v.img} />
									</div>
									{v.info.map( (v,iI) =>
										<div key={iI} id={"infoB"+(iI+2)+"-"+i} className="small smallHidden">
											{v}
										</div>
									)}
							</div>
						</div>
					)}
				</div>
			</div>
	</div>
)

export default Tech
