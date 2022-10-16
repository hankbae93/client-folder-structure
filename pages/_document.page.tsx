import Document, {
	Html,
	Main,
	NextScript,
	DocumentContext,
	DocumentInitialProps,
	Head,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

// NEXT.JS CUSTOM DOCUMENT
// https://nextjs.org/docs/advanced-features/custom-document

interface DocumentProps extends DocumentInitialProps {
	styles: any;
}

export default class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext): Promise<DocumentProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
	render() {
		return (
			<Html lang='en'>
				<Head>
					<link
						rel='stylesheet'
						as='style'
						crossOrigin='anonymous'
						href='https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=optional'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/icon?family=Material+Icons'
						rel='stylesheet'
					/>
					<link
						rel='stylesheet'
						href='https://unpkg.com/swiper@8/swiper-bundle.min.css'
					/>
					{(this.props as any).emotionStyleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id='modal' />
				</body>
			</Html>
		);
	}
}
