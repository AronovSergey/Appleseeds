const darkOrLight = (color) => {
    switch (color) {
        case 'yellow':
            return 'Light color';
        case 'pink':
            return 'Light color';
        case 'orange':
            return 'Light color';
        case 'blue':
            return 'Dark color';
        case 'purple':
            return 'Dark color';
        case 'brown':
            return 'Dark color';
        default:
            return 'Unknown color';
    }
}
console.log(darkOrLight('yellow'));
console.log(darkOrLight('pink'));
console.log(darkOrLight('orange'));
console.log(darkOrLight('blue'));
console.log(darkOrLight('purple'));
console.log(darkOrLight('brown'));
console.log(darkOrLight('red'));