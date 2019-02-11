import React from 'react';
import classes from './Photo.scss'
import pic from '../../assets/photo.jpg'
import handleViewport from 'react-in-viewport';

const photo = (props: { inViewport: boolean }) => {

	const { innerRef } = props;
	const translate = props.loaded ? 'rotateX(0) translateX(0)' : 'rotateX(180deg) translateX(-100vh)';
	const opacity = props.loaded ? '1' : '0'

	
	return (

	<div className={classes.Photo} ref={props.innerRef}
	style={{
		opacity: opacity,
		//{/* transform: translate, */}
		transition: 'opacity 0.6s',
	}}>
		<img src={pic} alt="a picture of me" />
	</div>
	)
}

export default handleViewport(photo);