var input = document.getElementById('inp');
var counter = document.getElementById('counter')
document.addEventListener('input',function(event){
    var str = input.value;
    var arr = str.split(" ");
    counter.innerText = "You have typed "+arr.length+" words and " + str.length + " letters";
    console.log(arr,str);
})
