export default function convertToPounds(weight: number): number {
	const pounds = (weight / 10) * 2.205;
	return parseFloat(pounds.toFixed(1));
}
