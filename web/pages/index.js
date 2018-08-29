import React from 'react';
import DefaultLayout from '../layout/default';
import '../styles/style.scss';
import Search from '../components/Search';
import CarList from '../components/CarList';
import Contact from '../components/Contact';

export default () => {
	return (
		<DefaultLayout>
			<Search />
			<CarList />
			<Contact />
		</DefaultLayout>
	);
};
