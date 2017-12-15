$('document').ready(function (e) {

    $("div.highlighter-rouge + *").css('margin-top','30px');
    $("div.highlighter-rouge").css('margin-top','15px');


    if( $(".docs").length ) {
    	$(document.body).css('background-color','transparent');
    }

});


// new Tether({
//     element: '.cp-navbar',
//     target: '.cp-main-menu',
//     attachment: 'bottom middle',
//     targetAttachment: 'top middle',
//     constraints: [{
//         to: 'scrollParent',
//         pin: true,
//     }]
// });