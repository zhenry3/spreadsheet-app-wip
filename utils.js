/**
 * Converts one RGB value into one hex value.
 * @param {Number} c Red, Green, or Blue value
 * @returns Hex value
 */
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

/**
 * Converts RGB to Hex
 * @param {String} rgb RGB string value in the form rgb(RRR, GGG, BBB) 
 * @returns Hex value of the RGB input
 */
function rgbToHex(rgb) {
    rgb = rgb.replace("rgb(", "");
    rgb = rgb.replace(")", "");
    rgb_arr = rgb.split(", ");
    return "#" + componentToHex(Number(rgb_arr[0])) + componentToHex(Number(rgb_arr[1])) + componentToHex(Number(rgb_arr[2]));
}