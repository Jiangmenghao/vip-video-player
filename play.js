function play() {
    var myApi = document.getElementById("api");
    var index = myApi.selectedIndex;
    var apiValue = myApi.options[index].value;

    var myText = document.getElementById("mediaUrl").value;
    var url = apiValue + myText;

    document.getElementById("player").src = url;

    var timer = null;
    scrollTop(timer);
}

function playNewWindow() {
    var myApi = document.getElementById("api");
    var index = myApi.selectedIndex;
    var apiValue = myApi.options[index].value;

    var myText = document.getElementById("mediaUrl").value;
    var url = apiValue + myText;

    window.open(url);
}

function scrollTop(timer) {
    timer = setInterval(function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        var iSpeed = Math.ceil(osTop / 50);
        document.documentElement.scrollTop = document.body.scrollTop = osTop - iSpeed;

        if (osTop === 0) {
            clearInterval(timer);
        }
    },10)
}