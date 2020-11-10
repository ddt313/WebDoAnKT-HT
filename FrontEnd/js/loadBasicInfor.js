$(document).ready(function() {

    if (acc_username == "") {
        location.replace("http://127.0.0.1:5500/login.html");
    }

    $("#username").html(acc_username);

    $("#logout").click(function() {
        location.reload();
        document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    });
});