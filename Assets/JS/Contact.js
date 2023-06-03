
// 1- validation
function Send(id){
    var send = document.getElementById(id);
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if(!name.value){
        name.style.borderColor = "red";
    }
    if(!email.value){
        email.style.borderColor = "red";
    }
    if(!message.value){
        message.style.borderColor = "red";
    }
    // 3- Create a new paragraph element at the bottom of the form to notify the user that  the form has been submitted successfully.
    if (name.value && email.value && message.value){
        
        var ele = document.createElement("p");
        var text = document.createTextNode("the form has been submitted successfully.");
        ele.appendChild(text);            
        var parent = document.getElementById("form");
        var child = document.getElementById(id);
        parent.insertBefore(ele,child)
                    
                
    }


}
   // 2- Change all inputs text color (onchange).
    function change(id){
        document.getElementById(id).style.color = "#797979";
    }