const { text } = require("stream/consumers");

// Selecionar o imput
const input = document.querySelector("#nome");

// adicionar evento - paste
input.addEventListener("paste", funcion() {

    const regex = new RegExp("0-9a-zA-Z\b}]+$");
    const self = this;

// precisa ser colocado
setTimeout(Function() {

    const text = self.value;

    if(!regex.test(text)) {
      self.value = "";  
    }
}, 500);

});