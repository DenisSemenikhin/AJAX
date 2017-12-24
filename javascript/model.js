function getAlbum(id, view){
    const Init = {
        mod: 'jsonp',
        async: true,
        method: 'GET'
    };

    var xhr1 = new XMLHttpRequest();
    var xhr2 = new XMLHttpRequest();

    xhr1.open(Init.method, 'https://jsonplaceholder.typicode.com/albums/?id='+id.id, Init.async, Init.mod);
    xhr1.send();
    xhr1.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return;
        } else {
            var data = JSON.parse(xhr1.responseText);
            view.setAlbumTitle(data);
        }
    }   

    xhr2.open(Init.method, 'https://jsonplaceholder.typicode.com/photos/?albumId='+id.id, Init.async, Init.mod);
    xhr2.send();
    xhr2.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return;
        } else {
            var data = JSON.parse(xhr2.responseText);
            view.displayPhotoList(data);
        }
    }
};

function getNextAlbum(id) {
    id.nextId();
    getAlbum(id, view);
};
    
function getPrevAlbum(id) {
    if(id.id > 1){
        id.prevId();
        getAlbum(id, view);
    }
};