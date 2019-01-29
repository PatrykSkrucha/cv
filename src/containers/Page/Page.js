import React, { Component } from 'react';
import About from '../About/About'
import Intro from '../Intro/Intro'
import Nav from '../Navbar/Navbar';
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'

import classes from './Page.scss';

class Page extends Component {
	
	
	render() {
		return (
			<div  className={classes.Page}>

				<Nav />
				<Intro />
				<About />
				<Skills />
				<Footer />
			</div>
		)
	}
}
export default Page;