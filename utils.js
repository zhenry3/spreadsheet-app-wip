function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
function rgbToHex(rgb) {
    rgb = rgb.replace("rgb(", "");
    rgb = rgb.replace(")", "");
    rgb_arr = rgb.split(", ");
    return "#" + componentToHex(Number(rgb_arr[0])) + componentToHex(Number(rgb_arr[1])) + componentToHex(Number(rgb_arr[2]));
}