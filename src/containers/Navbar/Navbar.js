import React, { PureComponent } from 'react'
import Headroom from 'react-headroom';

import classes from './Navbar.scss'

class Navbar extends PureComponent {

	state = {
		isTop: true,
	}

	componentDidMount(){
		document.addEventListener(`scroll`,()=>{
			// const scrollPosition = window.scrollY < 50;
			if(window.scrollY>100){
				// this.setState((prevState) => ({isTop: !prevState.isTop}))
				this.setState({isTop: false})
			}
			else{
				this.setState({isTop: true})
			}
		})
	}

	

	render() {
		return (

			<Headroom >
				<nav className={classes.Navbar}
				style={{
					'backgroundColor': this.state.isTop ? 'transparent' : '#9297a0',
					'position': this.state.isTop? 'fixed' : 'static',
					'justifyContent': this.state.isTop? 'flex-start' : 'flex-end',

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
			</Headroom>
		)
	}
}


export default Navbar;