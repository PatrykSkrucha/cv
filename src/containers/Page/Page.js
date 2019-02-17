import React, {useState} from 'react';
import About from '../../components/About/About'
import Intro from '../../components/Intro/Intro'
import Nav from '../../components/Navbar/Navbar';
import Skills from '../../components/Skills/Skills'
import Footer from '../../components/Footer/Footer'
import Contact from '../../components/Contact/Contact'
import classes from './Page.scss';



const Page = () => {

	const [show, setShow] = useState(false);
	const showPhoto = () => {
		setTimeout(() => setShow(true), 500);
	}


	return (
		<div className={classes.Page}>

			<Nav />
			<Intro />
			<About onEnterViewport={showPhoto} loaded={show}/>
			<Skills />
			<Contact />
			<Footer />
		</div>
	)

}
export default Page;