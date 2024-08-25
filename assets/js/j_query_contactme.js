// $('#btn1').click(function () {
//     alert($("#myTextArea").val());
// });
// $('#btn2').click(function () {
//     alert(document.getElementById('myTextArea').value);
// });
// $('#btn3').click(function () {
//     alert($("#myTextArea").html());
// });
// $('#btn4').click(function () {
//     alert(document.getElementById('myTextArea').innerHTML);
// });
// $('#btn5').click(function () {
//     $("#myTextArea").val('new value jQ');
// });
// $('#btn6').click(function () {
//     document.getElementById('myTextArea').value = 'new value JS';
// });


// $("#myTextArea").val()


// function go() {
//     var c1 = document.getElementById('area1').value;
//     var d1 = document.getElementById('as');
//     d1.innerHTML = c1;
//     var c2 = document.getElementById('area2').value;
//     var d2 = document.getElementById('as');
//     d2.innerHTML = c1 + " " + c2;
// }

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var name = encodeURIComponent(document.getElementById('form_name').value);
    var email = encodeURIComponent(document.getElementById('form_email').value);
    var message = encodeURIComponent(document.getElementById('form_message').value);

    // Create the mailto URL
    var mailtoUrl = 'mailto:kgaurav112@gmail.com?subject=I%20want%20to%20collaborate%20or%20have%20query&body=' +
        'Hello !!! I am :%20' + name + '. %0A' +
        'My primary mail is:%20' + email + '%0A' +
        'And my Message is:%0A' + message + '.';

    // Open the mailto link
    window.location.href = mailtoUrl;
});
