import React from 'react';
import DefaultLayout from '../layout/default';
import Search from '../components/Search';
import CarList from '../components/CarList';
import Contact from '../components/Contact';

export default class index extends React.Component {
	static async getInitialProps({ req }) {
		const isClient = !req;
		if (!isClient) {
		}
		return {};
	}
	componentWillMount() {
		// 只在client 运行
		if (typeof window !== 'undefined') {
			console.log('!!!!!!!!!!!!!');
			const { registerObserver } = require('react-perf-devtool');
			let options = {
				shouldLog: true,
				port: 3000
			};

			registerObserver(options, this.handleObserverCallback);
		}
	}
	handleObserverCallback(measures) {
		// do something with the measures
		console.log('call back');
	}
	render() {
		return (
			<DefaultLayout>
				<Search />
				<CarList />
				<Contact />
			</DefaultLayout>
		);
	}
}
