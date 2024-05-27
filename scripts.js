function toggleMobileMenu(){
	document.getElementById("menu").classList.toggle("active");
}



function copyToClipboard(emailId, buttonId) {
    // Get the email text
    var emailText = document.getElementById(emailId).innerText.split(' ')[0]; // Extract the email address

    // Copy the text to clipboard
    navigator.clipboard.writeText(emailText).then(function() {
        // Change the button color after copying
        var button = document.getElementById(buttonId);
        button.classList.add('copied');
        button.innerText = 'Copied!';
        
        // Reset the button color and text after 2 seconds
        setTimeout(function() {
            button.classList.remove('copied');
            button.innerText = 'Copy';
        }, 2000);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}



