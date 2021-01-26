function sendMail(contactForm) {
    emailjs.send("service_0ypwl1g","carlhenric", {
        "from_email": contactForm.emailaddress.value
    })
     .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  
}