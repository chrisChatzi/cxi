import React, { PropTypes } from 'react'

const Main = ( { state, lang, hashOver, hashOut, mover } ) => (
	<div className="main">
	{/*title*/}
		<div className="titleTop">
			<div id="line" className="line lineTop"></div>
			<div id="" className="text">
				<span id="w" className="letters">W</span>
				<span id="e" className="letters">e</span>
				<span id="b" className="letters">b</span>
				<span>&nbsp;</span>
				<span className="letters">S</span>
				<span className="letters">o</span>
				<span className="letters">l</span>
				<span className="letters">u</span>
				<span className="letters">t</span>
				<span className="letters">i</span>
				<span className="letters">o</span>
				<span className="letters">n</span>
				<span className="letters">s</span>
			</div>
			<div id="line2" className="line lineBot"></div>
		</div>
	{/*boxes*/}
		<div id="boxes" className="boxes">
			{state.box.map( (v,i) =>
				<div key={i} id={"box"+(i+1)} className={"box box"+(i+1)} >
					<div className={"dot"+(i+1)}></div>
					<div id={"icon"+(i+1)} className="icon"><i className={"fa fa-4x fa-"+v.icon}></i></div>
					<div className="title">{v.title}</div>
					<div className="txt">
						{v.txt}
					</div>
					<div className="hashtags">
						{v.hashtags.map( (vH, iH) =>
							<div key={iH} className="item"
								onMouseOver={(e)=>hashOver(i, (iH+1))} onMouseOut={(e)=>hashOut(i, iH+1)} >
								<i className={"fa fa-"+vH.icon}></i> {vH.txt}
							</div>
						)}
					</div>
					{v.hashtags.map( (vH2, iH2) =>
						<div key={iH2}>
							<div id={"hover"+i+"-"+(iH2+1)} className={"hover hover"+(iH2+1)}>
								<div className="hover-title">{vH2.infoTitle}</div>
								<div className="hover-txt">{vH2.infoTxt}</div>
							</div>
							<div id={"hoverIndex"+i+"-"+(iH2+1)} 
								className={"hoverIndex hoverIndex"+(iH2+1)}></div>
						</div>
					)}
				</div>
			)}
		</div>
	</div>
)

export default Main