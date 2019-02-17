import React, { Component, Suspense } from 'react';
// import Page from './containers/Page/Page';
import Spinner from './components/Spinner/Spinner'
const Page = React.lazy(()=>import('./containers/Page/Page'))

class App extends Component {
	
	render() {

		return (
			<>	
				<Suspense fallback={<Spinner />}>
					<Page />
				</Suspense>
				
			</>
		);
	}
}

export default App;
