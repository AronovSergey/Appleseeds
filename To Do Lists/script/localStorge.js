function updateLocalStorge() {
    const data = list.getAll();
    localStorage.setItem('myList', list.getJSON());
}

function fillTheListWithLocalStorge() {
    if(localStorage.getItem('myList')){
        const json = localStorage.getItem('myList');
        const data = JSON.parse(json);
    
        data.forEach(item => {
            list.create(item.content, item.completed);
        })
    }
}