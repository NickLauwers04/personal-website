import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import IntroductionTitle from './IntroductionTitle'
import IntroductionUnderline from './IntroductionUnderline'
import SubtitleHighlight from './SubtitleHighlight'
import Subtitle from './Subtitle'
import MyImage from 'images/profile.png'

const Introduction = (props) => {
	return (
		<div>
			<div className="row">

				<div className="col-md-6">

					<div>
						<div className="introduction-title">

							<CSSTransition in={props.appear}
														 appear={true}
													 	 timeout={1000}
														 classNames="title-translate">
								<IntroductionTitle appear={props.appear}/>
							</CSSTransition>

							<CSSTransition in={props.appear}
														 appear={true}
													 	 timeout={1000}
														 classNames="underline-translate">
								<IntroductionUnderline appear={props.appear}/>
							</CSSTransition>
						</div>
					</div>
					
					<div className="something">

						<CSSTransition in={props.appear}
													 appear={true}
												 	 timeout={1500}
													 classNames="highlight-translate">
							<SubtitleHighlight/>
						</CSSTransition>

						<CSSTransition in={props.appear}
													 appear={true}
												 	 timeout={2000}
													 classNames="subtitle-translate">
							<Subtitle/>
						</CSSTransition>
					</div>
				</div>

				<div className="col-md-6">
					<img src={MyImage} />
				</div>
			</div>
		</div>
	)
}

export default Introduction