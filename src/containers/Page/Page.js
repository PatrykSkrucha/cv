import React, { Component } from 'react';
import About from '../About/About'

import Nav from '../Navbar/Navbar';
import Skills from '../Skills/Skills'

import classes from './Page.scss';

class Page extends Component {
	
	render() {
		return (
			<div className={classes.Page} id="up">

				<Nav />

				<About />
				
				<Skills />

			</div>
		)

	}
}
export default Page;