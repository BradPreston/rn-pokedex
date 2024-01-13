import { Provider } from '@repo/query';

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
