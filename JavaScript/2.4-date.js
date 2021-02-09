const stringifyToday = () => {
    const today = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `Today is ${days[today.getDay()]} the ${today.getDate()} of ${months[today.getMonth()]}, ${today.getFullYear()}`;
}

console.log(stringifyToday());
