const { circleArea, circleCircumference } = require('./circle');

const r = 5;

const alan = circleArea(r);
const cevre = circleCircumference(r);

console.log(`Yarıçapı ${r} olan dairenin alanı: ${alan}`);
console.log(`Yarıçapı ${r} olan dairenin çevresi: ${cevre}`);
