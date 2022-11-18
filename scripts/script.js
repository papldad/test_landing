$(document).ready(function () {
    getVideo();
    sendData();
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

function sendData() {

    $('select[name="age"]').change(function () {
        userAge = $(this).val();
    });

    $('select[name="test"]').change(function () {
        userTest = $(this).val();
    });

}


let userAge = "<no data>";
let userTest = "<no data>";

function clickBtn() {
    fbq('track', 'SomeData', { 'age': userAge, 'answer': userTest });
}