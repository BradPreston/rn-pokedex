import { convertMetersToFeetString } from '@internal';

describe('convertMetersToFeetString', () => {
	it('returns a string', () => {
		const result = convertMetersToFeetString(10);
		expect(typeof result).toBe('string');
	});

	it(`converts 7 to 2' 4"`, () => {
		const result = convertMetersToFeetString(7);
		expect(result).toBe(`2' 4"`);
	});

	it(`converts 20 to 6' 7"`, () => {
		const result = convertMetersToFeetString(20);
		expect(result).toBe(`6' 7"`);
	});
});
