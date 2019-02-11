import React, {useState} from 'react'
import { useTransition, animated} from 'react-spring'
const springTrans = () => {
	const [items, set] = useState([1,2,3,4]);
	const trans = useTransition(items, item => item.key, {
		from: {transform: 'translate3d(0,-40px,0)'},
		enter: {transform: 'translate3d(0,0px,0)'},
		leave: {transform: 'translate3d(0,-40px,0)'},
	})
	return(

		trans.map(({ item, props, key}) => (
			<animated.div
			key={key} style={props}>{item}</animated.div>
	)) 
	) 
}

export default springTrans;