function get(){
  let a = document.getElementById("password");
  console.log(a.value);
  let b= document.getElementById("mail");
  console.log(b.value);
  let c = document.getElementById("number");
  console.log(c.value);
}
function image(){
  document.getElementById("images").src='html images/eye.svg';
  }

function image2(){
    document.getElementById("images").src='html images/eye-close.svg';
  }
  document.getElementById("images").onclick='image2()';


function show1(){
  let pass = document.getElementById("ab");
  if(pass.type === "password"){
    pass.type = "text";
  }
  else{
    pass.type = "password";
  }
}

function show(){
  let pass = document.getElementById("password");
  if(pass.type === "password"){
    pass.type = "text";
  }
  else{
    pass.type = "password";
  }
}
