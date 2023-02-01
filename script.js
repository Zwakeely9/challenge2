let i = "User";

function addResponse() {
  let chat = document.getElementById("inputField");
  let resp = document.createElement("p");
  resp.appendChild(document.createTextNode("Hello, " + i));
  chat.appendChild(resp);
}

document.addEventListener("DOMContentLoaded", function addResponse() {
    for (let form = i; form < 2 ; form++) {
        addResponse();
    }
    let button = document.getElementById("submit");
    button.onclick = addResponse;
});