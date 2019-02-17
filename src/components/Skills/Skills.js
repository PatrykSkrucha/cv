import React, { useState } from 'react';
import HTMLico from '../../assets/HTML/html5-brands';
import CSSico from '../../assets/CSS/CSS';
import JSico from '../../assets/JS/js-brands';
import REACTico from '../../assets/React/react-brands';
import SASSico from '../../assets/Sass/sass-brands'
import classes from './Skills.scss'
const skills = () => {


	
return (
	<div className={classes.wrapper}>

		<div className={classes.Skills} id="skills">

			<h1>Skills</h1>

			<div className={classes.Flex_container}>

				<div className={classes.Favicons}>
					<h2>Technologies I know:</h2>
					<ul>
						<li><HTMLico size='60px' />HTML5</li>
						<li><CSSico size='60px' />CSS3</li>
						<li><SASSico size='60px' />SASS</li>
						<li><JSico size='60px' />JavaScript</li>
						<li><REACTico size='60px' />ReactJs</li>
					</ul>
				</div>

				<div className={classes.SoftSkills}>
					<p>
						Enim ullamco quis voluptate ipsum irure veniam sit est labore labore tempor in Lorem. Sunt id laboris ea non enim nulla nisi enim. Quis ex labore minim ex et non excepteur consectetur pariatur ad fugiat sit.
				</p>
				</div>
			</div>
		</div>

	</div>
)
}

export default skills;