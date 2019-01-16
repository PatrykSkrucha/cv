import React from 'react';
import classes from './Photo.scss'
import pic from '../../assets/photo.jpg'

const photo = () => (
	<div className={classes.Photo}>
		<img src={pic} alt="me" />
	</div>
)

export default photo;