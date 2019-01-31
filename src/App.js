import React, { Component } from 'react';
import Page from './containers/Page/Page'
import { ParallaxProvider } from 'react-scroll-parallax';


class App extends Component {
	
	scrolling = () => {
		console.log(`scrolling`);
		
	}
	render() {
		return (
			<>	
				<ParallaxProvider>
					<Page />
				</ParallaxProvider>			
			</>
		);
	}
}

export default App;
