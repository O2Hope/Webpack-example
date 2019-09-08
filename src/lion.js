import Header from './components/header/header';
import LionImage from './components/lion-image/lion-image';
import _ from "lodash"

const header = new Header();
const lionImage = new LionImage();

header.render(_.upperFirst("lion"));
lionImage.render();