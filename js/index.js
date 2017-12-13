var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,   //环路
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});
//音乐

var musictu = document.querySelector(".musictu");
var music = document.querySelector("#music");
var audio = document.querySelector("audio");
music.onclick = function () {
    if (audio !== null) {
        if (audio.paused) {
            audio.play();//audio.play();// 这个就是播放
            musictu.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();// 这个就是暂停
            musictu.style.webkitAnimationPlayState = "paused";
        }
    }
};


//仅限手机端显示
// var system = {};
//var p = navigator.platform;
//var u = navigator.userAgent;
//
//system.win = p.indexOf("Win") == 0;
//system.mac = p.indexOf("Mac") == 0;
//system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//if (system.win || system.mac || system.xll) {//如果是PC转
//    if (u.indexOf('Windows Phone') > -1) {  //win手机端
//
//    }else {
//        window.location.href = "1.html";
//    }
//}
