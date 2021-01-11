function emailChecker(email) {
    const checker = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return checker.test(String(email).toLowerCase());
}
  
  function checkEmail() {
    var email = document.getElementById("email").value;
    if (emailChecker(email)) {
      document.getElementById("email").style.border = "1px solid rgb(101, 157, 231)";
    //   document.getElementById("shown").style.display = "none";
    //   document.getElementById("hidden").style.display = "block";
      document.getElementById("error-text").innerHTML = ""
    } else {  
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("error-text").innerHTML ="A valid email is required";
    }
  };

  function goToSuccess(){
    var email = document.getElementById("email").value;
    if (emailChecker(email)) {
      document.getElementById("input-page").innerHTML = document.getElementById("success-page").innerHTML;
      document.getElementById("input-page").style.backgroundColor = "#a9d8aa";
      document.getElementById("sh1").style.color = "#275328";
      document.getElementById("sp").style.color = "#377539";
    }
     else {  
      document.getElementById("email").style.border = "1px solid red";
      document.getElementById("error-text").innerHTML ="A valid email is required";
    }
  };
