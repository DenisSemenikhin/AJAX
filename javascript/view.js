function displayPhotoList(photoArr) {    
    const albumPhoto = document.querySelector('.album__photo');
    cleanElement(albumPhoto);

    if(!photoArr || photoArr.length < 1) {        
        albumPhoto.innerHTML = '<h2>В этом альбоме нет фотографий</h2>';
        return;
    }    

    photoArr.map(({title, url, thumbnailUrl}) => {        
        const img = document.createElement('img');
        img.src = thumbnailUrl;
        img.alt = title;
        img.classList.add('album__img')
        return [img, url]})
    .map(([img, url], index) => {
        let a = document.createElement('a');
        a.href = url;
        a.target = '_blank';
        a.title = `photo ${index + 1}`;
        a.classList.add('album__link');
        a.appendChild(img);
        return a;})    
    .forEach((link) => {
        albumPhoto.appendChild(link);                    
    });    
}

function setAlbumTitle(albumInfo){
    let albumTitle = document.querySelector('.album__title');
    albumTitle.textContent = (albumInfo[0].title) ? albumInfo[0].title : 'Unknown album title';
}

function cleanElement(elem) {
    while (elem.firstChild)
        elem.removeChild(elem.firstChild);
}