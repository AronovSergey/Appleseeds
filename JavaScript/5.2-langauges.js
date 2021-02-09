const rankNativeSpeakers = (language) => {
    switch (language) {
        case 'mandarin':
            console.log('MOST number of native speakers!');
            break;
        case 'spanish':
            console.log('2nd place in number of native speakers');
            break;
        case 'english':
            console.log('3rd place in number of native speakers');
            break;
        case 'hindi':
            console.log('4th place in number of native speakers');
            break;
        case 'arabic':
            console.log('5th place in number of native speakers');
            break;
        default:
            console.log('Not in the top 5');
            break;
    }
}

rankNativeSpeakers('spanish');
rankNativeSpeakers('hebrew');