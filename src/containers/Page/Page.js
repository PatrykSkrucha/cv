import React, { Component } from 'react';
import About from '../About/About'

import Nav from '../Navbar/Navbar';
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'

import classes from './Page.scss';

class Page extends Component {
	
	render() {
		return (
			<div className={classes.Page} id="up">

				<Nav />

				<About />
				
				<Skills />
				<Footer />
			</div>
		)

	}
}
export default Page;