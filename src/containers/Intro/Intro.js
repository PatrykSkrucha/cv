import React, {useRef} from 'react';
import classes from './Intro.scss';
import { useSpring, useChain, animated } from 'react-spring'

const intro = () => {

	const containerRef = useRef()
	const container = useSpring({
		from: {opacity: 0},
		to: {opacity: 1},
		delay: 500,
		ref: containerRef,
	})
	
	const txt1Ref = useRef();
	const txt1 = useSpring({
		from: {opacity: 0, color: 'white', 'padding-top': '40px'
	},
		to: async next => {
			await next ({opacity: 1})
			await next ({'padding-top': '5px'})
			
		},
		ref: txt1Ref

	})
	
	const txt2Ref = useRef();
	const txt2= useSpring({
		from: {opacity: 0, 'padding-top': '0px'},
		to: { opacity: 1, 'padding-top': '20px'},
		ref: txt2Ref
	})


	const chain =  useChain([containerRef, txt1Ref, txt2Ref], [0.2,1, 3],)
	
	
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