import { Provider } from '@repo/query';
import localFont from 'next/font/local';

const roboto = localFont({
	src: [
		{
			path: '../public/fonts/Roboto-Black.ttf'
		},
		{
			path: '../public/fonts/Roboto-Regular.ttf'
		}
	]
});

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
