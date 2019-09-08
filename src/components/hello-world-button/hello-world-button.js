import "./styles.scss";

class helloWorldButton {
    buttonClass = "button";
    render() {
        const button = document.createElement("button");
        button.innerHTML = "Hello world";
        button.classList.add(this.buttonClass);
        button.onclick = () => {
            alert("Hello world!");
        }

        const body = document.querySelector("body");
        body.appendChild(button);
    }
}

export default helloWorldButton;