// 设置默认图片
function defaultImg(){
    var img = event.srcElement;
    console.log(img); 
    img.src = "/public/images/default.jpg"; 
    img.onerror = null
}