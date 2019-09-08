import Lion from './Lion.jpg'
import './styles.scss';

class LionImage {
    render(){
        const img = document.createElement('img');
        img.src = Lion;
        img.alt = 'Lion';
        img.classList.add('lion-image');
        
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default LionImage;
