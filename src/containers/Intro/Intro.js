import React, {useRef} from 'react';
import classes from './Intro.scss';
import { useSpring, useChain, animated } from 'react-spring'

const intro = () => {
	const contRef = useRef()
	const container = useSpring({
		from: {opacity: 0},
		to: {opacity: 1},
		delay: 500,
		// duration: 5000
	})
	
	const opacityRef = useRef();
	const opacity = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		// delay: 1000,
		ref: opacityRef
	})
	const paddingRef = useRef();
	const padding = useSpring({
		from: {color: 'white'},
		to: {color: 'cadetblue'},
		// delay: 3000,
		ref: paddingRef
	})
	const chain =  useChain([opacityRef, paddingRef], [1,2],)
	
	
	return (
		<div  className={classes.Intro}>

	<animated.div style={container} className={classes.Container}>
		<animated.span  className={classes.Text1} style={opacity}>Welcome</animated.span>
		<span className={classes.Text2}> on my site</span>
	</animated.div>
		
	</div>
)
} 

export default intro;