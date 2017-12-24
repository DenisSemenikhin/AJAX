function getAlbum(){
    const Init = {
        mod: 'jsonp',
        async: true,
        method: 'GET'
    };

    var xhr = new XMLHttpRequest();
    xhr.open(Init.method, "https://jsonplaceholder.typicode.com/albums/1", Init.async, Init.mod);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (this.readyState != 4) return;
        if (this.status != 200) {
            alert( 'ошибка: ' + (this.status ? this.statusText : 'запрос не удался') );
            return;
        } else {
            var data = JSON.parse(xhr.responseText);
            alert(data)   
        }
    }   
};






//${id.id}