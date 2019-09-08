import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import addImage from "./add-image"
import Header from "./components/header/header"

const helloWorlfButton = new HelloWorldButton();
const header = new Header();

header.render();
helloWorlfButton.render();
addImage();
