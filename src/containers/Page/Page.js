import React, { Component } from 'react';
import About from '../About/About'

import Nav from '../Navbar/Navbar';
import HTMLico from '../../assets/HTML/html5-brands';
import CSSico from '../../assets/CSS/CSS';
import JSico from '../../assets/JS/js-brands';
import REACTico from '../../assets/React/react-brands';
import SASSico from '../../assets/Sass/sass-brands'

import classes from './Page.scss';

class Page extends Component {
	
	render() {
		return (
			<div className={classes.Page} id="up">

				<Nav />
				<About />
				

				<section className={classes.skills} id="two">
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

				</section>

			</div>
		)

	}
}
export default Page;