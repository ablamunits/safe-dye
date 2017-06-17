const colorBlind = require('color-blind');
const colorConvert = require('color-convert');
const DelataE = require('delta-e');

function toProtanomaly(hex) {
	return colorBlind.protanopia(hex);
}

function toTritanomaly(hex) {
    return colorBlind.tritanopia(hex);
}

function hexToLab(hex) {
    const labArray = colorConvert.hex.lab(hex);
    return {
        L: labArray[0],
        A: labArray[1],
        B: labArray[2]
    }
}

function isDifferentColors(hex1, hex2) {
	const similarityThreshold = 25;

    const lab1 = hexToLab(hex1);
    const lab2 = hexToLab(hex2);

    return DelataE.getDeltaE00(lab1, lab2) > 25;
}

module.exports = {
    validate: function (color1, color2) {
        return this.validateRedGreen(color1, color2) && this.validateBlueYellow(color1, color2);
    },

	validateRedGreen: function (color1, color2) {
		const simulatedColor1 = toProtanomaly(color1);
		const simulatedColor2 = toProtanomaly(color2);

		return isDifferentColors(simulatedColor1, simulatedColor2);
	},

    validateBlueYellow: function (color1, color2) {
        const simulatedColor1 = toTritanomaly(color1);
        const simulatedColor2 = toTritanomaly(color2);

        return isDifferentColors(simulatedColor1, simulatedColor2);
    },

    validateNormal: function(color1, color2) {
        return isDifferentColors(color1, color2);
    }
}
