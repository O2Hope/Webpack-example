import Lion from './Lion.jpg'

const addImage = () => {
    const img = document.createElement('img');
    img.alt = 'Lion';
    img.width = 600;
    img.src = Lion;

const body = document.querySelector('body');
body.appendChild(img);
}

export default addImage;
