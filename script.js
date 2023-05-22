(function(){
    emailjs.init("uVjxkuz78i5RuoQ4S");})(); // replace with your actual user ID


    function sendEmails() {
    var senderEmail = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject = document.getElementById("subject").value;
    
    var validEmails = [];
    var invalidEmails = [];

// Read contents of CSV file
    var file = document.getElementById("upload-file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
    var csv = event.target.result;
    var lines = csv.split('\n');
    for (var i = 0; i < lines.length; i++) {
        var email = lines[i].trim();
        var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/;
        if (emailRegex.test(email)) {
            validEmails.push(email);
        } else {
            invalidEmails.push(email);
        }
        }
// Send email to valid email addresses
    for (var j = 0; j < validEmails.length; j++) {
        var templateParams = {
        to_name: validEmails[j],
        from_name: senderEmail,
        message_html: message,
        subject_html: subject
        };
        emailjs.send('service_vwu9hhn', 'template_1e787ah', templateParams).then(function(response) {
            console.log("SUCCESS", response);
        }, function(error) {
            console.log("FAILED", error);
        });
    }
    alert("Emails sent to valid email addresses.");
    };
}