import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}
	render() {
		const { buildManifest } = this.props;
		const { css } = buildManifest;
		return (
			<html>
				<Head>{css.map((file) => <link rel="stylesheet" href={`/_next/${file}`} key={file} />)}</Head>
				<title>next js demo</title>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
