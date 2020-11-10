$(document).ready(function() {

    fetchListMusic();
});

function fetchListMusic() {
    $.ajax({
        url: 'http://127.0.0.1:8080/music',
        type: "get",
        dataType: 'json',
        success: (data) => {
            $("#add-list-music").html(renderListMusic(data));
        }
    });
}

function renderListMusic(listMusic) {
    let txt = `<div class="row diary-item align-items-center">
                    <div class="col-3 d-flex justify-content-center">STT</div>
                    <div class="col-6 d-flex justify-content-center">Bài hát</div>
                    <div class="col-3 d-flex justify-content-center">Trạng thái</div>
                </div>`;

    txt += listMusic.map((music, index) => {
        return `<div class="row diary-item align-items-center">
                    <div class="col-3 d-flex justify-content-center">${index + 1}</div>
                    <div class="col-6 d-flex justify-content-center">
                        <a href="https://www.youtube.com/playlist?list=${music.src}" target="_blank">${music.name_music}</a>              
                    </div>
                    <div class="col-3 d-flex justify-content-center">${type[music.mu_type]}</div>
                </div>`;
    }).reduce((a, b) => {
        return a + b;
    });

    return txt;
}