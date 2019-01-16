import React, { Component } from 'react';
import Photo from '../Photo/Photo'
import classes from './About.scss';

class About extends Component {
	componentDidMount() {
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
						{/* <Photo /> */}
						Commodo mollit exercitation officia pariatur exercitation nostrud voluptate anim fugiat. Elit mollit laborum esse pariatur. Anim consectetur occaecat adipisicing aute culpa duis nisi exercitation sunt nisi est voluptate officia amet. Non qui ut magna proident qui fugiat quis fugiat culpa eiusmod. Cupidatat tempor consequat enim veniam nostrud elit ut nisi dolor do labore pariatur. Culpa pariatur laborum officia est ad enim sit reprehenderit esse eu ullamco adipisicing. Ipsum culpa incididunt nostrud velit nostrud irure aliquip ea reprehenderit sint.

						Quis reprehenderit velit irure laboris nisi sit adipisicing reprehenderit fugiat dolore ipsum. Sunt elit sit dolor eu qui irure veniam consectetur commodo fugiat ipsum sint. Fugiat qui laboris deserunt nulla non mollit. Officia sunt et aliquip ad. Magna in ex dolore voluptate aliquip ullamco aliquip.

						Ex laborum magna aute minim elit exercitation nostrud elit ex amet ut. Officia non sint nostrud duis duis. Qui enim qui do duis aute quis eu irure. Sunt incididunt nulla labore non et consectetur veniam consequat laboris. Cupidatat amet commodo sit consequat ullamco do deserunt nisi ut excepteur anim nisi.

						Est cillum ut cillum fugiat occaecat minim ex in. Amet magna ipsum aute velit excepteur tempor. Fugiat officia aliquip est ea velit aute aliqua. Laborum anim dolore excepteur amet irure nulla mollit do dolore laboris in veniam non et. Dolor aute ut consequat cupidatat ex mollit deserunt dolor aute consectetur excepteur anim ipsum nisi. Est est eiusmod anim consequat laboris incididunt sunt sit deserunt mollit elit aute Lorem esse.
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