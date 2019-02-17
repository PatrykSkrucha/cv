import React, {useRef} from 'react';
import classes from './Intro.scss';
import { useSpring, useChain, animated } from 'react-spring'

const intro = () => {

	const containerRef = useRef()
	const txt1Ref = useRef();
	const txt2Ref = useRef();


	const container = useSpring({
		from: {opacity: 0},
		to: {opacity: 1},
		delay: 500,
		ref: containerRef,
	})
	
	const txt1 = useSpring({
		from: {opacity: 0, color: 'white', transform: 'translateY(0px)'
	},
		to: async next => {
			await next ({ opacity: 1 })
			await next ({ transform: 'translateY(-30px)' })
			
		},
		config: { duration: 600 },
		ref: txt1Ref

	})
	
	const txt2= useSpring({
		from: {opacity: 0, transform: 'translateY(0px)' },
		to: {opacity: 1, transform: 'translateY(20px)' },
		config: {duration: 200},
		ref: txt2Ref
	})


	useChain([containerRef, txt1Ref, txt2Ref], [0.2, 1 , 2],)
	
	
	return (
		<div  className={classes.Intro}>

	<animated.div style={container} className={classes.Container}>
		<animated.span style={txt1} className={classes.Text1} >Welcome</animated.span>
		<animated.span style={txt2} className={classes.Text2}> on my site</animated.span>
	</animated.div>
		
	</div>
)
} 

export default intro;