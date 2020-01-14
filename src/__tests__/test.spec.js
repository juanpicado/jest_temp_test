import fs from 'fs';
import os from 'os';
import path from 'path';

describe('dsadsa', () => {

	test('dsadasdsadsa', () => {
		const dd = path.join(os.tmpdir(), '/verdaccio-test');

		console.log("d-->", dd);
		const tempRoot = fs.mkdtempSync(dd);


		expect(1).toEqual(1);
	});

});