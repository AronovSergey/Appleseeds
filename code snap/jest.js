/*  
    ***"celsiusToKelvin.js":

    function celsiusToKelvin(celsius) {
        return celsius + 273.15;
    }
    module.exports = celsiusToKelvin;
*/

/*
    1)npm init
    2)npm i --save-dev jest
    3)in package.json change "scripts"->"test" value from "echo \"Error: no test specified\" && exit 1" to "jest"
    4)crete new folder __test__, name each file like this <source_name>.test.js
    5)use "npm rum test" to run it

*/

const celsiusToKelvin = require('../src/celsiusToKelvin.js');

test('c to Kelvin - 0 conversion', () => {
    // arrange
    let tempC = 0;
    let tempK = 273.15;

    // act 
    let e = expect(celsiusToKelvin(tempC));

    // assert
    e.toBe(tempK)
})