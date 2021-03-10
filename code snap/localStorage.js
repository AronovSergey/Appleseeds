(function () {
    const user = {
        name: 'guy',
        age: 28
    }

    // create new local storage instance
    localStorage.setItem('myUser', JSON.stringify(user));

    // fetching from local storage
    let userJson = localStorage.getItem('myUser');
    let userFromLocalStorage = user.JSON.parse(userJson);

    // removing a storage instance
    localStorage.clear('myUser');
})();