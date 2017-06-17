
const SafeDye = require('./safe-dye');
const expect = require('chai').expect;

// Based on color blind chart: http://mkweb.bcgsc.ca/colorblind/

describe('SafeDye Tests', function() {
	describe('Protanopia - Red Green color blindness', function() {
		it('Should return true for normal vision and false for problematic green and red', function() {
			const green = '#00A55A';
			const red = '#FF3C69';

			expect(SafeDye.validateNormal(red, green)).to.eql(true);
			expect(SafeDye.validate(red, green)).to.eql(false);
		});
	});

	describe('Tritanopia - Blue Yellow color blindness', function() {
		it('Should return true for normal vision and false for problematic blue and green', function() {
			const blue = '#2B81CB';
			const green = '#23A046';

			const blue2 = '#40CEFF';
			const green2 = '#00E0C2';

			expect(SafeDye.validateNormal(blue, green)).to.eql(true);
			expect(SafeDye.validateNormal(blue2, green2)).to.eql(true);

			expect(SafeDye.validate(blue, green)).to.eql(false);
			expect(SafeDye.validate(blue2, green2)).to.eql(false);
		});

		it('Should return true for normal vision and false for problematic yellow and violet', function() {
			const yellow = '#FEE277';
			const violet = '#FFD1EF';

			expect(SafeDye.validateNormal(yellow, violet)).to.eql(true);
			expect(SafeDye.validate(yellow, violet)).to.eql(false);
		});
	});
})