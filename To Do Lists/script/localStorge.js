function updateLocalStorge() {
    const data = list.getAll();
    localStorage.setItem('myList', list.getJSON());
}

function fillTheListWithLocalStorge() {
    const json = localStorage.getItem('myList');
    const data = JSON.parse(json);
    console.log(data);
    
    
    data.forEach(item => {
        list.create(item.content, item.completed);
    })

    console.log(list.getAll());
}