import { convertToPounds } from '@internal';

describe('convertToPounds', () => {
	it('returns a number', () => {
		const result = convertToPounds(10);
		expect(typeof result).toBe('number');
	});

	it('converts 69 to 15.2', () => {
		const result = convertToPounds(69);
		expect(result).toBe(15.2);
	});

	it('converts 1220 to 269', () => {
		const result = convertToPounds(1220);
		expect(result).toBe(269);
	});
});
