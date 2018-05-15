   var user=document.getElementById('userName').value;
   var email=document.getElementById('emailId').value;
   var userValid=false;
   var emailValid=false;
    function openSlideMenu(){
      document.getElementById('sidebar').style.left = '0px';
    }

    function closeSlideMenu(){
      document.getElementById('sidebar').style.left = '-2500px';
    }
    function validateUsername(){
      var nameRegex = /^[a-zA-Z\-]+$/;
      user=document.getElementById('userName').value;
      if(user=='')
      {
        document.getElementById('userName').style.border='2px solid red';
      }
      else if(!nameRegex.test(String(user).toLowerCase())){
        // alert("user");
         document.getElementById('userName').style.border='2px solid red';
        document.getElementById('userError').innerHTML="PLEASE ENTER A VALID USER NAME";
        document.getElementById('userError').style.display='block';
        }
        else{
          document.getElementById('userName').style.border='none';
          document.getElementById('userError').style.display='none';
          userValid=true;
        }
    }

    function validateEmail(){
      var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       email=document.getElementById('emailId').value;
      if(email=='')
      {
        document.getElementById('emailId').style.border='2px solid red';
      }
      else if (!emailRegEx.test(String(email).toLowerCase())){
         document.getElementById('emailId').style.border='2px solid red';
        document.getElementById('emailError').innerHTML="PLEASE ENTER A VALID EMAILID";
        document.getElementById('emailError').style.display='block';
        }
        else{
          document.getElementById('emailId').style.border='none';
           document.getElementById('emailError').style.display='none';
          emailValid=true;
        }
    }

    function submit(){
      if(userValid==true && emailValid==true){
        alert('USERNAME :' + user + ' and' + 'EMAIL ID:'+ email);
      }
    }