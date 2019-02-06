import React, { Component } from 'react';
import Page from './containers/Page/Page'
import {Spring, Transition} from 'react-spring'
class App extends Component {
	
	render() {
		const items=[1,2,3,4];
		return (
			<>	

				<Transition 
					items={items} keys={item => item.key}
					from={{ transform: 'translate3d(0,-40px,0)'}}
					enter={{ transform: 'translate3d(0,0px,0)'}}
					leave={{ transform: 'translate3d(0,-40px,0)'}}>
						{item => props => 
							<div style={props}>{item.text}</div>}
				</Transition>
				{/* <Spring from={{number: 0}} to={{number: 1}} delay={1000}>
					{props => <div>{props.number}</div>}
				</Spring> */}
			</>
		);
	}
}

export default App;
