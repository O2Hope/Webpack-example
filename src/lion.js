import Header from './components/header/header';
import LionImage from './components/lion-image/lion-image';
import React from 'react';


const header = new Header();
const lionImage = new LionImage();

header.render("Lion");
lionImage.render();