import React, {useState} from 'react';
import {useTransition, animated} from 'react-spring'

const trans = () => {
	
	const [items, set] = useState()
	const transition = useTransition(items, item => item.key, {
		from: { transform: 'translate3d(0,-40px,0)' },
		enter: { transform: 'translate3d(0,0px,0)' },
		leave: { transform: 'translate3d(0,-40px,0)' },
	})
	
	return transition.map(({ item, props, key }) =>
  <animated.div key={key} style={props}>{item.text}</animated.div>
)
}

export default trans;