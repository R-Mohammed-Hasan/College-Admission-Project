function get(){
  let a = document.getElementById("password");

  let b= document.getElementById("mail");

  let c = document.getElementById("number");
}
function show1(){
  let pass = document.getElementById("ab");
  if(pass.type === "password"){
    pass.type = "text";
    document.getElementById("images2").src="html images/eye.svg";

  }
  else{
    pass.type = "password";
    document.getElementById("images2").src="html images/eye-close.svg";

  }
}

function show(){
  let pass = document.getElementById("password");
  if(pass.type === "password"){
    pass.type = "text";
    document.getElementById("images").src="html images/eye.svg";

  }
  else{
    pass.type = "password";
    document.getElementById("images").src="html images/eye-close.svg";

  }
}
