document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("B7_qhnPcS5nXIJIRU"); 

    var form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            sendEmail();
        }
        form.classList.add('was-validated');
    });

    function sendEmail() {
        var templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            topic: document.getElementById('topic').value,
            message: document.getElementById('message').value
        };

        emailjs.send('service_th6eaup', 'template_izas29j', templateParams)
            .then(function(response) {
                alert('Thank you for contacting us', response.status, response.text);
            }, function(error) {
                alert('FAILED...', error);
            });
    }
});
