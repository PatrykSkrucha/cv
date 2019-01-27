import React, { Component } from 'react';
import Page from './containers/Page/Page'

class App extends Component {
	
	scrolling = () => {
		console.log(`scrolling`);
		
	}
	render() {
		return (
			<>				
				<Page />
			</>
		);
	}
}

export default App;
