$(function(){
    getGoods();
})
function  getGoods (){
$.get('./shoppingPHP/getGoodsList.php','001',function(data){
    console.log(data);
    console.log(typeof data);
    showData(data)
},'json');
}


function showData(data){
    let htmlStr = '';
    data.forEach(element => {
        htmlStr += `<li class="show_goods">
        <a href="02-goods.html?goodsId=${element.goodsId}">
            <img src="${element.goodsImg}" alt="">
        </a>
        <div class="show_gText">
            <h3>
                <em>￥${element.goodsPrice}</em>
                <span>￥${element.beiyong2}</span>
            </h3>
            <a class="textUn" href="#">${element.goodsName}</a>
            <p>
                <span>3期免息</span>
                <span>自营</span>
                <span>津贴*每满300减30</span>
            </p>
            <p>
                <i class="iconfont icon-weixin"></i>
                <span>${element.beiyong3}</span>
                <span>${element.beiyong1}</span>
            </p>
            <p>考拉海购自营</p>
        </div>
    </li>`
    });
    // $('#tuijian').prepend(htmlStr);
    $('#showBox').append(htmlStr);
}