import React, { Component } from 'react';
import Photo from '../../assets/photo.jpg';
import classes from './About.scss';

class About extends Component {
	componentDidMount(){
		this.typing();
	}
	typing = () => {
		const spnText = document.querySelector('.About__Text___2v1J1');
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
					<div className={classes.LeftSection}>
						<p>Anim magna labore dolor ad laborum. Labore Lorem est reprehenderit ut laborum. Et esse aute ipsum mollit commodo duis velit minim incididunt amet ipsum reprehenderit. Cupidatat mollit velit cupidatat voluptate. Do pariatur ad Lorem ea irure laboris nostrud tempor commodo mollit reprehenderit. Magna eiusmod excepteur ad veniam veniam ipsum. Anim minim quis sit eiusmod esse minim proident.Eiusmod eiusmod pariatur reprehenderit qui cupidatat minim. Sit sunt minim qui adipisicing id id. Reprehenderit voluptate officia excepteur occaecat est consequat ipsum consequat. Officia cillum duis culpa excepteur nostrud. Dolor nulla minim consectetur proident mollit. Deserunt sint enim incididunt incididunt cillum dolore veniam enim magna.</p>
					</div>

					<div className={classes.RightSection}>
						<div>

						<span className={classes.Text}></span>
						</div>
					</div>
				</div>

			</div>
		)
	}
}


export default About;