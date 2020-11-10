$(document).ready(function() {    
    fetchLastMusic();
});

function fetchLastMusic() {
    $.ajax({
        url: "http://127.0.0.1:8080/last-music/" + acc_username,
        type: "get",
        success: (data) => {
            let video = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=${data}&autoplay=1&loop=1" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            $("#add-link-music").html(video);
        }
    });
}