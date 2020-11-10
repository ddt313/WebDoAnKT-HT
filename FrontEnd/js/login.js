$(document).ready(function() {
    $("#login").click(function(e) {
        e.preventDefault();
        let login_username = $("#username").val();
        let login_pass = $("#password").val();

        authAccount(login_username, login_pass);
    });
});

function authAccount(username, pass) {
    const data = {
        username,
        pass
    };

    $.ajax({
        url: 'http://127.0.0.1:8080/account',
        type: "post",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: (data) => {
            console.log(data, username);
            if (data) {
                // acc_username = username;
                document.cookie = 'username=' + username + '; max-age=864000';
                window.location.href = "http://127.0.0.1:5500/index.html";
            } else {
            }
        }
    });
}