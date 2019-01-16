import React from 'react';
import classes from './Skills.scss'
import HTMLico from '../../assets/HTML/html5-brands';
import CSSico from '../../assets/CSS/CSS';
import JSico from '../../assets/JS/js-brands';
import REACTico from '../../assets/React/react-brands';
import SASSico from '../../assets/Sass/sass-brands'

const skills = () => (
	<div className={classes.Skills}>
		<h1>Skills</h1>
		<div className={classes.Favicons}>
			<ul>
				<li><HTMLico /></li>
				<li><CSSico /></li>
				<li><SASSico /></li>
				<li><JSico /></li>
				<li><REACTico /></li>

			</ul>
		</div>
	</div>
)

export default skills;