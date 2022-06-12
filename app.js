(function(){

    //select form elements
    let name = document.getElementById("uname");
    let subject = document.getElementById("subject");
    let message = document.getElementById("msg");
    let submitBtn = document.getElementById("btn");
    let prompt = document.getElementById("error");
    

    //window load event
    window.addEventListener('load', () =>{
        console.log("CONNECTED SUCCESSFULLY");

        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            //invoke validateForm function
            validateForm(name, subject, message);
        });
        
    })

    //function to validate form
    const validateForm = (name, subject, message) => {
        //check for blank inputs
        if (name.value === '' && subject.value === '' && message.value === '') {
            console.log("fill in the blank inputs");
            //prompt error message to error element
            prompt.innerHTML = "Fill blank inputs";
            prompt.style.color = "red"
        }else{
            console.log("Successfully submitted");
            //prompt error message to error element
            prompt.innerHTML = "Successfully submitted!";
            //change color of alert text to green
            prompt.style.color = "green"
        }
    }

})();//end of self invoking function
