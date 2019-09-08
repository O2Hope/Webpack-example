import "./styles.css";

class helloWorldButton {

    render() {
        const button = document.createElement("button");
        button.innerHTML = "Hello world";
        button.classList.add('button');
        button.onclick = () => {
            alert("Hello world!");
        }

        const body = document.querySelector("body");
        body.appendChild(button);
    }
}

export default helloWorldButton;