import React, {useState} from 'react';
import Photo from '../Photo/Photo'
import classes from './About.scss';


const about = () =>{
	const [loadedPhoto, setPhoto] = useState(false); 
	const showPhoto = () => {
		setTimeout(()=>setPhoto(true),500);
	}
	return (
	<div className={classes.About} id="about">
		<h1 className={classes.Header}>About me</h1>
		<div className={classes.Flex_container} >

			<Photo onEnterViewport={showPhoto} loaded={loadedPhoto}/>

			<div className={classes.SpanInterval}>	
				<p>In cupidatat nulla incididunt sint ullamco non esse dolore qui. Magna eu adipisicing id mollit commodo incididunt officia incididunt sint labore excepteur. Cillum proident aliquip exercitatioIn cupidatat nulla incididunt sint ullamco non esse dolore qui. Magna eu adipisicing id mollit commodo incididunt officia incididunt sint labore excepteur. Cillum proident aliquip exercitatio</p>
			</div>
		</div>
	</div>
)
	}

export default about;