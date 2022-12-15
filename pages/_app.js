import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700;800;900&display=swap'
					rel='stylesheet'
				/>
				<title>AirBnb</title>
				<meta
					name='description'
					content='Find holiday rentals, cabins, beach houses, unique homes and experiences around the world – all made possible by Hosts on Airbnb.'
				/>
				<link rel='icon' href='/favicon.png' />
			</Head>

			<Component {...pageProps} />
		</>
	);
}
export default MyApp;
