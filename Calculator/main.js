var display = document.getElementById('display')
var buttons = document.getElementsByClassName('button')

var op1 = 0
var op2 = null
var opr = null

for (var i=0; i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
    var value = this.getAttribute('data-value');

    if (value == '+'){
        opr = '+'
        op1 = parseFloat(display.textContent);
        display.innerText=""
    }
    else if (value== "*"){
        if (opr == null){
            opr = '*'
            op1 = parseFloat(display.textContent);
            display.innerText=""
        }
        else{
            display.innerText = "ERROR"
        }
    }   
    else if (value== "/"){
        if (opr == null){
            opr = '/'
            op1 = parseFloat(display.textContent);
            display.innerText=""
        }
        else{
            display.innerText = "ERROR"
        }
    }   
    else if (value== "-"){
        if (opr == null){
            opr = '-'
            op1 = parseFloat(display.textContent);
            display.innerText=""
        }
        else{
            display.innerText = "ERROR"
        }
    }
    else if (value== "C"){
        op1=0
        op2=null
        opr=null
        display.innerText=""
    }   
    else if (value == '='){
        op2 = parseFloat(display.textContent);
        var x = eval(op1+opr+op2);
        display.innerText=x;
        opr = null;
    }
    else{
        display.innerText += value;
    }
    });
}

