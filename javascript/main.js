const id = new Id(1);

const view = {
    displayPhotoList,
    setAlbumTitle
};

getAlbum(id,view);

document.querySelector('.album__next_btn').onclick = () => {
    getNextAlbum(id, view);
};

document.querySelector('.album__prev_btn').onclick = () => {
    getPrevAlbum(id, view);
};
