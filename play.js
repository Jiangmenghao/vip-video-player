function play() {
    let myApi = document.getElementById("api");
    let index = myApi.selectedIndex;
    let apiValue = myApi.options[index].value;
    let myText = document.getElementById("mediaUrl").value;
    document.getElementById("player").src = apiValue + myText;

    const timer = null;
    scrollTop(timer);
}

function playNewWindow() {
    let myApi = document.getElementById("api");
    let index = myApi.selectedIndex;
    let apiValue = myApi.options[index].value;

    let myText = document.getElementById("mediaUrl").value;

    window.open(apiValue + myText);
}

function scrollTop(timer) {
    timer = setInterval(function(){
        let osTop = document.documentElement.scrollTop || document.body.scrollTop;
        let iSpeed = Math.ceil(osTop / 50);
        document.documentElement.scrollTop = document.body.scrollTop = osTop - iSpeed;

        if (osTop === 0) {
            clearInterval(timer);
        }
    },10);
}