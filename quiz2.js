document.addEventListener("keydown",function(event){
    // alert(event.key);
    // document.write(event.key);
    $(document).ready(function(){
        $("#div").text(event.key);
    });
})    