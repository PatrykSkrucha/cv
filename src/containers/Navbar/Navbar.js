import React, { Component } from 'react'

import classes from './Navbar.scss'

class Navbar extends Component {

	state = {
		isTop: true
	}

	componentDidMount(){
		document.addEventListener(`scroll`,()=>{
			if(window.scrollY>50){
				this.setState({isTop: false})
			}
			else{
				this.setState({isTop: true})
			}
		})
	}

	render() {
		return (
			<>
				<nav className={classes.Navbar}
				style={{
					'backgroundColor': this.state.isTop ? 'transparent' : '#555fc6',
					'justifyContent': this.state.isTop? 'flex-start' : 'flex-end',
					'width': this.state.isTop? 'auto' : '100%',
				}}
				>
					<ul>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#skills">Skills</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</nav>
			</>
		)
	}
}


export default Navbar;