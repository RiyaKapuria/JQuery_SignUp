$(document).ready(function(){

  $('button').click(function(){
    validateForm();   
  });

  function validateForm(){
    var nameReg = /^[A-Za-z]+$/;
    var numberReg =  /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

    var name = $('#name').val();
    var telephone = $('#phnumber').val();
    var email = $('#email').val();
    var password = $('#password').val();

    var inputVal = new Array(name, telephone, email, password);
    var inputMessage = new Array("full name", "telephone number", "email address", "password");


        if(inputVal[0] == ""){
            $('#nameLabel').after('<span class="error"> Please enter your ' + inputMessage[0] + '</span>');
        } 
        else if(!nameReg.test(name)){
            $('#nameLabel').after('<span class="error"> Letters only</span>');
        }

        if(inputVal[1] == ""){
            $('#telephoneLabel').after('<span class="error"> Please enter your ' + inputMessage[1] + '</span>');
        } 
        else if(!numberReg.test(telephone)){
            $('#telephoneLabel').after('<span class="error"> Numbers only</span>');
        }

        if(inputVal[2] == ""){
          console.log("aa")
            $('#emailLabel').after('<span class="error"> Please enter your ' + inputMessage[2] + '</span>');
        } 
        else if(!emailReg.test(email)){
            $('#emailLabel').after('<span class="error"> Please enter a valid email address</span>');
        }

        if(inputVal[3] == ""){
            $('#passwordLable').after('<span class="error"> Please enter your ' + inputMessage[3] + '</span>');
        } 
        else if(password.length < 5){
            $('#passwordLable').after('<span class="error"> Your password must be at least 5 characters long</span>');
        }
        if(nameReg.test(name) && numberReg.test(telephone) && emailReg.test(email) && password.length > 5){
            window.location = 'reg_success.html';
        }
  } 
});

