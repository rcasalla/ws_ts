class Greeter {
    greet() {
        alert("Hello " + this.getName())
    }
    getName() {
        return prompt("Hello !! Can I know your name..??");;
    }
}
let greeter = new Greeter();
let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    (greeter.greet());
}
document.body.appendChild(button);