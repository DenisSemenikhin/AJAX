class Id {
    constructor(id) {
        this._id = (id < 1) ? 1 : id;
    }
    
nextId(){
    this._id += 1;
}

prevId() {
    if (this._id > 1) {
     this._id -= 1;
    }
}

getId() {
    return this._id;
}

}
