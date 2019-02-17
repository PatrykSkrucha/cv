import React, { Component } from 'react'

import classes from './Navbar.scss'

class Navbar extends Component {

	state = {
		isTop: true
	}

	componentDidMount(){
		document.addEventListener(`scroll`,()=>{
			if(window.scrollY>70){
				this.setState({isTop: false})
			}
			else{
				this.setState({isTop: true})
			}
		})
	}

	render() {

		let navbarClass = this.state.isTop ? classes.Navbar : classes.NavbarFixed
		
		return (
			<>
				<nav className={navbarClass}
				
				>
					<ul>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</nav>
			</>
		)
	}
}


export default Navbar;