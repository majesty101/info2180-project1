/* Add your JavaScript to this file */
window.onload = function(){




   
     document.querySelector("button").addEventListener("click", (e)=>{
        var emailaddr = (document.getElementById("email").value);
        var msg =document.getElementsByClassName("message");
         e.preventDefault();
         if (emailaddr == '' || emailaddr == null){
        msg[0].innerHTML= "Please enter a valid email"
             
         }else{
        
             msg[0].innerHTML = "Thank you your email address " + emailaddr + " has been added to our mailing list";
         }
       
     console.log(msg.innerHTML);
     
        })

    
};
    
       