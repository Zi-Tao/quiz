console.log("Hello World!")

var add = (
    function(){
        var counter = 0;
        return function(){
            counter += 1;
            return counter;
        }
    }
)();

console.log(add());


function printTreeTop(n){
    for(var i=1,k=n; i<=n, k>0; i++, k--){
    	console.log(" ".repeat(k-1)+"*".repeat((i*2)-1))
    }
}
function printTreeBottom(n){
    for(var i=1;i<=n-1;i++){
        console.log(" ".repeat(n-1)+"*")
    }
}
function Tree(n){
    printTreeTop(n);
    printTreeBottom(n);
}
Tree(4)