document.getElementById("upload-file-input").addEventListener("change", function () {
    var validEmails = [];
    var invalidEmails = [];

    // Read contents of CSV file
    var file = document.getElementById("upload-file-input").files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csv = event.target.result;
        var lines = csv.split('\n');
        for (var i = 0; i < lines.length; i++) {
            var email = lines[i].trim();
            var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/
                ;
            if (emailRegex.test(email)) {
                validEmails.push(email);
            } else {
                invalidEmails.push(email);
            }
        }
        // Display valid and invalid emails
        document.getElementById("validEmails").innerHTML = validEmails.join("<br><br>");
        document.getElementById("invalidEmails").innerHTML = invalidEmails.join("<br><br>");
        document.getElementById("validEmailCount").innerText = "(" + validEmails.length + ")";
        document.getElementById("invalidEmailCount").innerText = "(" + invalidEmails.length + ")";
    };
});