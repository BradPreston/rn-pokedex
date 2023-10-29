export default function convertMetersToFeetString(height: number): string {
	const inches = Math.round((height / 10) * 39.37);
	const feet = Math.floor(inches / 12);
	return `${feet}' ${inches % 12}"`;
}
