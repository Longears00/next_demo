import React from 'react';
import DefaultLayout from '../layout/default';
import '../styles/style.scss';
import Search from '../components/Search';

export default () => {
	return (
		<DefaultLayout>
			<Search />
			<div>hello next</div>
		</DefaultLayout>
	);
};
