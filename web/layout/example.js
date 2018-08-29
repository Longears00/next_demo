import Head from 'next/head';
import '../themes/main.scss';

let layout = ({ children }) => (
	<div>
		<Head>
			<meta charSet="utf-8" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="screen-orientation" content="portrait" />
			<meta name="x5-orientation" content="portrait" />

			<title>Course</title>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css"
			/>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js" />
		</Head>
		{children}
	</div>
);

export default layout;
