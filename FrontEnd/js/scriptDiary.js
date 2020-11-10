$(document).ready(function() {

    fetchDiary();
});

function fetchDiary() {
    $.ajax({
        url: 'http://127.0.0.1:8080/diary/' + acc_username,
        type: "get",
        dataType: 'json',
        success: (data) => {
            // console.log(data);
            test_data = data;
            $("#load-list-diary").html(renderListDiary(data));
        }
    });
}

function renderListDiary(listDiary) {
    let txt = `<div class="row diary-item align-items-center">
                    <div class="col-4 d-flex justify-content-center">Thời gian</div>
                    <div class="col-6 d-flex justify-content-center">Bài hát</div>
                    <div class="col-2 d-flex justify-content-center">Trạng thái</div>
                </div>`;

    txt += listDiary.map(diary => {
        return `<div class="row diary-item align-items-center">
                    <div class="col-4 d-flex justify-content-center">${diary.d_time}</div>
                    <div class="col-6 d-flex justify-content-center">
                        <a href="https://www.youtube.com/playlist?list=${diary.src}" target="_blank">${diary.name_music}</a>                    
                    </div>
                    <div class="col-2 d-flex justify-content-center">${type[diary.mu_type]}</div>
                </div>`;
    }).reduce((a, b) => {
        return a + b;
    });

    return txt;
}