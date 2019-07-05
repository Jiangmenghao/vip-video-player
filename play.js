$(function () {
    $('[data-toggle="tooltip"]').tooltip();//激活tooltip

    $("#formInfo").submit(function (e) {
        e.preventDefault();//组织表单默认提交

        let mediaUrl = $("#mediaUrl").val();
        if (mediaUrl !== '') {
            $("#player").attr("src",$("#api option:selected").val() + mediaUrl);//播放视频
            $("html, body").animate({scrollTop:0},2000);//回到页面顶部
            setTimeout(function () {
                $(".donate:eq(0)").css("opacity",1);//显示捐赠二维码
                $("#qrcode").css("transform","scale(1.3)");//二维码放大
            },2000);
            $("#donate-mobile").removeClass().addClass("col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 donate-mobile visible-sm-block visible-xs-block").delay(3000).animate({opacity:1});//显示移动端捐赠按钮
        }else {
            alert("请输入视频链接");
        }
    });

    $("#button-new-window").click(function () {
        let mediaUrl = $("#mediaUrl").val();
        if (mediaUrl !== '') {
            window.open($("#api option:selected").val() + mediaUrl);//新窗口播放视频
        }else {
            alert("请输入视频链接");
        }
    });

    $(".hidden-icon:eq(0)").click(function () {
        $(".donate:eq(0)").css("opacity",0);//点击隐藏捐赠二维码
    });
});