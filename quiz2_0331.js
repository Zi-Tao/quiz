// var tags = "李知恩";    //將 李知恩 更改成 %22%E6%9D%8E%E7%9F%A5%E6%81%A9%22
var tags = "%22%E6%9D%8E%E7%9F%A5%E6%81%A9%22";
var dataUrl = "https://api.flickr.com/services/feeds/photos\_public.gne?tags=" + tags +"&tagmode=any&format=json&per_page=400&jsoncallback=?"; 
// var dataUrl = "https://api.flickr.com/services/feeds/photos_public.gne?tags=%22%E6%9D%8E%E7%9F%A5%E6%81%A9%22&tagmode=any&format=json&per_page=400&jsoncallback=?";
var data = $.getJSON(dataUrl); 
data.done( function( msg ) { 
    // console.log(msg);
    // msg=JSON.parse(msg);
    // var msg=$.parseJSON(msg);

    // 以下註解區是教授寫法
    // console.log(msg["items"]);
    // $.each(msg.items,function(i,item){
    //     $("#contain").html();
    //     $("#contain").append($("<img/>").attr("src", item.media.m));
    // });

    for(var i=0;i<msg["items"].length;i++){
        console.log(msg["items"][i]["media"]["m"]);
        $("#contain").html();
        $("#contain").append($("<img/>").attr("src", msg["items"][i]["media"]["m"]));
    }
    // just do it!
}); 
data.fail( function( msg ) { 
    console.log(msg);
    $("#contain").html("無法獲取資料");
    // just do it!
});