import React from 'react';
import classes from './Photo.scss'
import pic from '../../assets/photo.jpg'
import handleViewport from 'react-in-viewport';

const photo = (props: { inViewport: boolean }) => {

	const { innerRef } = props;
	const translate = props.loaded ? 'translateX(0)' : 'translateX(-100vh)';

	
	return (

	<div className={classes.Photo} ref={props.innerRef}
	style={{
		transform: translate,
		transition: 'transform 0.6s',
	}}>
		<img src={pic} alt="a picture of me" />
	</div>
	)
}

export default handleViewport(photo);