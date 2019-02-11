import React from 'react';
import About from '../About/About'
import Intro from '../Intro/Intro'
import Nav from '../Navbar/Navbar';
import Skills from '../Skills/Skills'
import Footer from '../Footer/Footer'
import Validator from 'email-validator';
import scroll from 'scroll';
import classes from './Page.scss';

const Page = () => {
	
		scroll.top(Nav, 400, ()=>console.log('navbar 200px'))

		const email = Validator.validate("aaa.pl")

		console.log(email)
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
export default Page;