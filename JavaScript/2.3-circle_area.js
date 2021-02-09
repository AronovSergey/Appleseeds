const circleArea = radius => Math.PI * radius ** 2;

const areaOfEleven = circleArea(11);
console.log(`exactly: ${areaOfEleven}`);
console.log(`rounded to two decimal places: ${Number((areaOfEleven).toFixed(2))}`);
