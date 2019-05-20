function play() {
    var myApi = document.getElementById("api");
    var index = myApi.selectedIndex;
    var apiValue = myApi.options[index].value;

    var myText = document.getElementById("mediaUrl").value;
    var url = apiValue + myText;

    document.getElementById("player").src = url;
}

function playNewWindow() {
    var myApi = document.getElementById("api");
    var index = myApi.selectedIndex;
    var apiValue = myApi.options[index].value;

    var myText = document.getElementById("mediaUrl").value;
    var url = apiValue + myText;

    window.open(url);
}