import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import addImage from "./components/lion-image/lion-image"
import Header from "./components/header/header";
import _ from "lodash"

const helloWorldButton = new HelloWorldButton();
const header = new Header();

header.render(_.upperFirst('Hello world'));
helloWorldButton.render();
addImage();

if(process.env.MODE_ENV === 'production'){
    console.log('producion mode')
}else
console.log('dvelopment mode')

helloWorldButton.thisCausesAnError();