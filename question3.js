//Question 3: Write a function that converts HEX to RGB.
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB
//and if you enter RGB color format it returns HEX.

const convert = (input) => {
  if (input[0] === '#') {
    return hex_to_rgb(input.substr(1));
  }
  return rgb_to_hex(input);
}

const hex_to_rgb = (input) => {
  let r = parseInt(input.substr(0, 2), 16);
  let b = parseInt(input.substr(2, 2), 16);
  let g = parseInt(input.substr(4, 2), 16);

  return `rgb(${r}, ${g}, ${b})`;
};

const rgb_to_hex = (input) => {
  var result = /(.*?)rgb\((\d+), (\d+), (\d+)\)/;
  const rgb = result.exec(input);
  const r = parseInt(rgb[2]).toString(16).padStart(2, '0');
  const g = parseInt(rgb[3]).toString(16).padStart(2, '0');
  const b = parseInt(rgb[4]).toString(16).padStart(2, '0');

  return `#${r}${g}${b}`;
}

console.log(convert('#407090'));
console.log(convert('rgb(255, 0, 230)'));