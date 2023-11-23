let enterbtn = document.getElementById("Login-btn");
let InputUserNameRef = document.getElementById("input-username");
let formbody = document.getElementById("form-body");
let Enterchatapp = document.getElementById("message-box");
let formContainer = document.getElementById("form-Container");
let username = "";
enterbtn.addEventListener("click" , enterChatApp);

function enterChatApp(event){
    event.preventDefault();
    username = InputUserNameRef.value;
    if(username){
        formContainer.style.display = "none";
        Enterchatapp.style.display = "flex";
    }
    else{
        alert("Enter Username")
    }
}