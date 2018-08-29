import Head from 'next/head';
import NavBar from '../components/UI/NavBar';
import Footer from '../components/UI/Footer';
import '../themes/main.scss';

let layout = ({ children }) => (
	<div>
		<Head>
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="screen-orientation" content="portrait" />
			<meta name="x5-orientation" content="portrait" />

			<script
				defer
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"
				integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp"
				crossorigin="anonymous"
			/>

			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
			/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js" />
			<title>Course</title>
		</Head>
		<NavBar />
		{children}
		<Footer />
	</div>
);

export default layout;
