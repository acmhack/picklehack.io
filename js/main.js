var databaseRef = firebase.database().ref('emails/');
var pickleImg = $('.pickle-img img');
const maxLeft = $(window).width() / 64;
        const maxTop = $(window).innerHeight() / 46.85

function checkAndStoreEmail() {
    const emailInput = $('.input input');
    const email = $.trim(emailInput.val());
    const emailValid = (-1 !== email.search(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));

    if(emailValid) {
        emailInput.css('border', '');
        databaseRef.update({
            [email.replace('.', ',')]: true
        });

        $('.modal-window').addClass('shown');
        $('.modal').addClass('shown');
        emailInput.val('');

        setTimeout(() => {
            $('.modal-window').removeClass('shown');
            $('.modal').removeClass('shown');
        }, 4000);
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

function calcLeft(x, maxLeft) {
    return (-(maxLeft * 2) / $(window).width()) * x + maxLeft;
}

function calcTop(y, maxTop) {
    return (-(maxTop * 2) / $(window).innerHeight()) * y + maxTop;
}

$(document).mousemove(e => {
    if($(window).width() > 851) {
        pickleImg.css('left', calcLeft(e.pageX, maxLeft)).css('top', calcTop(e.pageY, maxTop));
    }
});