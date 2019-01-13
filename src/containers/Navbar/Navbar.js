import React from 'react'
import Headroom from 'react-headroom';

import classes from './Navbar.scss'

const navbar = () => (
	<Headroom>
		
	<nav className={classes.Navbar}>
		<ul>
			<li>
				<a href="#up">About</a>	
			</li>
			<li>
				<a href="#two">Skills</a>	
			</li>
			<li>
				<a href="#">Contact</a>		
			</li>		
		</ul>
	</nav>
	</Headroom>
)

export default navbar;