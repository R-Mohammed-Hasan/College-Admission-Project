function get(){
  let a = document.getElementById("password");
  console.log(a.value);
  let b= document.getElementById("mail");
  console.log(b.value);
  let c = document.getElementById("number");
  console.log(c.value);
  //document.get
}
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
