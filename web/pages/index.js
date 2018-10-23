import dynamic from 'next/dynamic'
import bugsnag from 'bugsnag-js'

import React from 'react'
import DefaultLayout from '../layout/default'
import Search from '../components/Search'
import CarList from '../components/CarList'
import Contact from '../components/Contact'
//import createPlugin from 'bugsnag-react';

// const DynamicComponentWithNoSSRBugsnagJs = dynamic(import('bugsnag-js'), {
// 	ssr: false
// });

// const DynamicComponentWithNoSSR = dynamic(import('bugsnag-react'), {
// 	ssr: false
// });

export default class index extends React.Component {
	static async getInitialProps({ req }) {
		const isServer = typeof window === 'undefined'
		if (!isServer) {
		}
		return {}
	}
	componentWillMount() {
		// 只在client 运行
		if (typeof window !== 'undefined') {
			//console.log('!!!!!!!!!!!!!');
			const bugsnagClient = bugsnag('253f679e03648d489493147225e76eff')
			// // wrap your entire app tree in the ErrorBoundary provided
			// const ErrorBoundary = bugsnagClient.use(createPlugin(React));
			// const { registerObserver } = require('react-perf-devtool');
			// let options = {
			// 	shouldLog: true,
			// 	port: 3000
			// };
			// registerObserver(options, this.handleObserverCallback);
		}
	}
	handleObserverCallback(measures) {
		// do something with the measures
		console.log('call back')
	}
	render() {
		return (
			<DefaultLayout>
				<Search />
				<CarList />
				<Contact />
			</DefaultLayout>
		)
	}
}
