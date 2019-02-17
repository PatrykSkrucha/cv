import React from 'react';
import pic from '../../assets/photo.jpg'
// import handleViewport from 'react-in-viewport';
import classes from './Photo.scss'

const photo = (props) => {

	const translate = props.loaded ? 'translateX(0) rotate(0deg)' : 'translateX(-100vh) rotate(-180deg)';

	
	return (

	<div className={classes.Photo}
	style={{
		transform: translate,
		transition: 'transform 1s',
	}}>
		<img src={pic} alt="my portrait" />
	</div>
	)
}

export default photo;