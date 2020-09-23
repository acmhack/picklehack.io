var databaseRef = firebase.database().ref('emails/');

function checkAndStoreEmail() {
    const email = $.trim($('.input input').val());
    const emailValid = (-1 !== email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
    const emailInput = $('.input input');

    if(emailValid) {
        emailInput.css('border', '');
        databaseRef.update({
            [email.replace('.', ',')]: true
        });
    } else {
        emailInput.addClass('invalid');
    }
}

$('.input input').keyup(e => {
    $('.input input').removeClass('invalid');

    if(e.which !== 13) {
        return;
    }

    checkAndStoreEmail();
});

$('.input .subscribe').click(checkAndStoreEmail);