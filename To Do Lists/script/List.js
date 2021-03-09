class ListItem {
    static id = 0; 

    constructor(_content) {
        this.id = ListItem.id++;
        this.content = _content;
        this.completed = false;
    }

    getId() { return this.id; }
    getContent() { return this.content; }
    getCompleted() { return this.completed; }
    setContent(_content) { this.content = _content; }
    changeCompleted() { !this.completed; }

}

class List {
    constructor() {
        this.list = [];
    }

    findIndex(id) {
        return this.list.map(item => item.getId()).indexOf(id);
    }

    create(content) {
        this.list.push(new ListItem(content));
    }

    read(id) {
        const index = this.findIndex(id);
        if(index > -1){
            return {
                id, 
                content: this.list[index].getContent(),
                completed: this.list[index].getCompleted(),
            }
        }
        return false;
    }

    update(id, content) {
        const index = this.findIndex(id);
        if(index > -1){
            this.list[index].setContent(content);
            return true;
        }
        return false;
    }

    delete(id) {
        const index = this.findIndex(id);
        if(index > -1){
            this.list.splice(index, 1);
            return true;
        }
        return false;
    }

    getAll() { return this.list; }

    removeAll() { this.list = []; }

    getListLength() { return this.list.length; }
}

const list = new List();

