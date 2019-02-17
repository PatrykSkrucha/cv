import React from 'react';
import Photo from '../Photo/Photo'
import handleViewport from 'react-in-viewport';

import classes from './About.scss';


const about = (props) =>{

	let show = props.loaded
	
	return (
	<div className={classes.About} id="about" >
		<h1 className={classes.Header}>About me</h1>
		<div className={classes.Flex_container} ref={props.innerRef}>

			<Photo loaded={show}/>

			<div className={classes.SpanInterval}>	
				<p>In cupidatat nulla incididunt sint ullamco non esse dolore qui. Magna eu adipisicing id mollit commodo incididunt officia incididunt sint labore excepteur. Cillum proident aliquip exercitatioIn cupidatat nulla incididunt sint ullamco non esse dolore qui. Magna eu adipisicing id mollit commodo incididunt officia incididunt sint labore excepteur. Cillum proident aliquip exercitatio</p>
			</div>
		</div>
	</div>
)
	}

export default handleViewport(about);