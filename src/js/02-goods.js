


// 商品信息
let str =location.search.split('=')[1];         //获取地址栏中的goodsId
if(str==undefined){
    str ='00101'
}
$.get('./shoppingPHP/getGoodsInfo.php','goodsId='+str,function(data){
    showData(data);
    console.log(data);  
},'json');

function showData(data){
    let goodsImg =data.goodsImg;
    let goodsName = data.goodsName;
    let goodsPrice = data.goodsPrice;

    $('.goodsName').text(goodsName);    //商品名称
    $('#goodsImg').attr({           //商品图片
        'src': goodsImg
    })       
    $('#goodsplace').text(data.beiyong1+ ' | Spa treatment');   //商品产地
    $('#goodsActPrice').text('￥'+(goodsPrice-40));      //活动价格
    $('#goodsNewPrice').text('￥'+(goodsPrice-20));      //新人价格
    $('#goodsPrice').text('考拉价：￥'+goodsPrice);      //商品原价
    $('#byStages').text('￥'+parseInt(goodsPrice/12));   //分期价格
    $('#oneCount').text(`1件装|单价${goodsPrice-20}元`)     //单买价格
    $('#beiyong3').text(`${data.beiyong3}人评价`);      //评价数量
    $('#goodsDesc').text(data.goodsDesc);           //商品评价

}