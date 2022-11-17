$(document).ready(function () {
    getVideo();
    getButton();
});

function getVideo() {
    const wistiaID = "sxs8jbdqal";
    // wistiaType: iframe, async, async_popover, playlist_iframe, playlist_api, playlist_popver, and open_graph_tag
    const wistiaType = "async";
    const videoWidth = $('#main-video').innerWidth();

    const url = "https://fast.wistia.net/oembed?url=http://home.wistia.com/medias/" +
        wistiaID +
        "?embedType=" + wistiaType +
        "&videoWidth=" + videoWidth;

    $.get(url, function (data) {
        $("#main-video").html(data.html);
    }
    );
}

function getButton() {
    let userAge = null;
    let userTest = null;

    $('select[name="age"]').change(function () {
        userAge = $(this).val();
        checkQuestion();
    });

    $('select[name="test"]').change(function () {
        userTest = $(this).val();
        checkQuestion();
    });


    function checkQuestion() {
        if (userAge == "yes" && userTest == "2") {
            $('#secret-button').css('display', 'inline-block');
        }
        return;
    }
}