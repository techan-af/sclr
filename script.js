function validate(){
 let username = document.getElementById("username").value;
 let password = document.getElementById("password").value;
 if (username == "admin" && password == "ait123") {
    alert("login successfully")
    location.href = "./index1.html";
 }
 else{
    alert("login failed")
    location.href = "./index.html";
 }

}

function notify(){
   console.log("Everyone will be notified in 30 days");
}