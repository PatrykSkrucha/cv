import React, { Component } from 'react';
import Photo from '../Photo/Photo'
import classes from './About.scss';

class About extends Component {
	state = {
		show: false
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({ show: true });
		}, 50);
	}
	typing = () => {
		const spnText = document.querySelector('.About__SpanInterval___2vXAD span');
		const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? KONIEC'

		let indexType = 0;

		const typing = () => {
			spnText.textContent += txt[indexType];
			indexType++;
			if (indexType === txt.length) clearInterval(indexTyping);
		}

		const indexTyping = setInterval(typing, 50);


	}
	render() {
		return (
			<div className={classes.About} id="one">
				<h1 className={classes.Header}>About me</h1>
				<div className={classes.Flex_container}>

					<Photo />

					<div className={classes.SpanInterval}
						//style={{
						//	transform: this.state.show ? 'translateX(0)' : 'translateX(+100vh)',
						//	opacity: this.state.show ? '1' : '0',
						//	transition: 'transform .7s'
						//	}}
						>
						<p>In cupidatat nulla incididunt sint ullamco non esse dolore qui. Magna eu adipisicing id mollit commodo incididunt officia incididunt sint labore excepteur. Cillum proident aliquip exercitatio</p>
					</div>
				</div>
			</div>
		)
	}
}


export default About;