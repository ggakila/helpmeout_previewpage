import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>HelpMeOut</title>
				<link rel="icon" type="image/x-icon" href="/images/helpmeout.svg"/>
			</Head>
				<Component {...pageProps} />

		</>
	);
}
