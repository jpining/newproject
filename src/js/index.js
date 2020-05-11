$(function(){
    autoPlay();
})
// jsonp搜索框
// <li><a href="#">hello</a></li>
// url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/suwd="+val+"&json=1&p=3&sid=22084_1436_13548_21120_22036_22073&req=2&csor=0&cb=callback'

let myTimer =null;
let $logoSearch = $('#logoSearch')
$logoSearch.on('input',function(){
    $('#oUl').html='';
    if(myTimer!=null){
        clearTimeout(myTimer);
        myTimer = null;
    }
    myTimer = setTimeout(()=>{
        console.log(typeof this.value);
        if(this.value == ''){
            $('#oUl').html('');
        }
        else{
            $.ajax({
                "url":"https://suggest.taobao.com/sug",
                "data":{
                    "code":"utf-8",
                    "_ksTS":"1515120676355_323",
                    "area":"c2c",
                    "bucketid":15,
                    "q":this.value 
                },
                success:function(data){
                    fn(data);
                },
                "dataType":'jsonp'
            })
        }
    },300)
})
function fn(data){
    let htmlStr = "";
    data.result.forEach(item => {
        htmlStr+=`<li><a href="#" class="searchTips">${item[0]}</a></li>`
    });
    $("#oUl").html(htmlStr);

    $('.searchTips').click(function(){
        console.log(this);
        $logoSearch.val($(this).text())
        $('#oUl').html('')
    })
}
// $('.searchTips').on('click',function(){
//     console.log(this);
// })
// $a.click(function(){
//     console.log(this);
//     $logoSearch.val($(this).text())
//     $('#oUl').html('')
// })





// 轮播图
let ord = 0 ;
let myTimer02 = null;
let $img = $('#bannerImgBox>img');
let $li = $('#bannerUL>li');
let hrefs = [
    'https://www.baidu.com',
    'https://www.1000phone.com'
]
// 自动播放
function autoPlay(){
    if(myTimer02!==null){
        return;
    }
    myTimer02 = setInterval(function(){
        goImg(ord+1);
    },2000)
}
// 跳转到下一张图片
function goImg(transOrd){
    // 健壮性
    let outOrd = ord;
    ord = transOrd;
    // 边界处理
    if(ord>$img.length-1){
        ord=0
    }else if(ord<0){
        ord=$img.length-1
    }
    // 外观呈现
    // 一张图片淡出一张图片淡入
    $img.eq(outOrd).animate({'opacity':0},1000);
    $img.eq(ord).animate({"opacity":1},1000);
    // 豆豆变化
    $li.eq(outOrd).css({'background':'#fff'});
    $li.eq(ord).css({'background':'#ff2337'});
}
// 停止播放
function stopPlay(){
    clearInterval(myTimer02);
    myTimer02=null;
}
// 鼠标移出移入停止
$img.hover(()=>{
    stopPlay();
    // console.log('111')
},()=>{
    autoPlay();
})
// 点击圆点跳转图片
$li.click(function(){
    stopPlay();
    goImg($(this).index());
})
// 点击左右箭头
$('#bannerLt').click(function(){
    stopPlay();
    goImg(ord-1);
})
$('#bannerGt').click(function(){
    stopPlay();
    goImg(ord+1);
})
// 点击图片跳转
$img.click(function(){
    stopPlay();
    window.location.href= hrefs[ord];
})






