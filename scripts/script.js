$(document).ready(function () {
    const wistiaID = "sxs8jbdqal";
    // iframe, async, async_popover, playlist_iframe, playlist_api, playlist_popver, and open_graph_tag
    const wistiaType = "async";

    const mainVideo = $('#main-video').innerWidth();
    console.log(mainVideo);
    const videoWidth = mainVideo;

    const url = "https://fast.wistia.net/oembed?url=http://home.wistia.com/medias/" +
        wistiaID +
        "?embedType=" + wistiaType +
        "&videoWidth=" + videoWidth;

    $.get(url, function (data) {
        console.log(data); // HTML content of the jQuery.ajax page
        $("#main-video").html(data.html);
    }
    );
});
