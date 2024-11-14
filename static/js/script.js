var email = document.getElementById("email");
var comment = document.getElementById("text");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    alert("Hello your email is: " + email.value + " , your comment is: " + comment.value);
});