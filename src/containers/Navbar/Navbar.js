import React, { Component } from 'react'
import Headroom from 'react-headroom';

import classes from './Navbar.scss'

class Navbar extends Component {

	state = {
		isTop: true,
	}

	componentDidMount(){
		document.addEventListener(`scroll`,()=>{
			const scrollPosition = window.scrollY < 50;
			if(scrollPosition !== this.state.isTop){
				this.setState((prevState) => ({isTop: !prevState.isTop}))
			}
		})
	}

	render() {
		return (

			<Headroom>

				<nav className={this.state.isTop ? classes.Navbar : classes.NavbarMoved}>
					<ul>
						<li>
							<a href="#about">About</a>
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
	}
}


export default Navbar;