let lastOperand=0;
let operation=null;
let hasSqrt=false;
let input=document.getElementById('input');
let history=document.getElementById('historyList')
let E=Math.E;
let Pi=Math.PI

let btn_1=document.getElementById('btn_1')
let btn_2=document.getElementById('btn_2')
let btn_3=document.getElementById('btn_3')
let btn_4=document.getElementById('btn_4')
let btn_5=document.getElementById('btn_5')
let btn_6=document.getElementById('btn_6')
let btn_7=document.getElementById('btn_7')
let btn_8=document.getElementById('btn_8')
let btn_9=document.getElementById('btn_9')
let btn_0=document.getElementById('btn_0')

let btn_equal=document.getElementById('btn_equal')
let btn_minus=document.getElementById('btn_minus')
let btn_plus=document.getElementById('btn_plus')
let btn_mult=document.getElementById('btn_mult')
let btn_def=document.getElementById('btn_def')
let btn_sqrt=document.getElementById('btn_sqrt')
let btn_clear=document.getElementById('btn_clear')

let btn_E=document.getElementById('btn_E')
let btn_PI=document.getElementById('btn_PI')

btn_1.addEventListener('click', function(){
    input.value +='1';
})
btn_2.addEventListener('click', function(){
    input.value +='2';
})
btn_3.addEventListener('click', function(){
    input.value +='3';
})
btn_4.addEventListener('click', function(){
    input.value +='4';
})
btn_5.addEventListener('click', function(){
    input.value +='5';
})
btn_6.addEventListener('click', function(){
    input.value +='6';
})
btn_7.addEventListener('click', function(){
    input.value +='7';
})
btn_8.addEventListener('click', function(){
    input.value +='8';
})
btn_9.addEventListener('click', function(){
    input.value +='9';
})
btn_0.addEventListener('click', function(){
    input.value +='0';
})
btn_E.addEventListener('click', function(){
    input.value +='E';
    hasSqrt=true;
})
btn_PI.addEventListener('click', function(){
    input.value +='π';
    hasSqrt=true;
})
function checkSqrt(){
    if(hasSqrt==true){
        let inputSqrt=input.value;
        if(inputSqrt.includes('E')){
            lastOperand=E.toFixed(5)
        }
        else if(inputSqrt.includes('π')){
            lastOperand=Pi.toFixed(5)
        }
        else{
            lastOperand=Math.sqrt(parseInt(inputSqrt.substring(1)))
        }
    }
    hasSqrt=false;
}
function checkSqrtEqual(){
    if(hasSqrt==true){
        let inputSqrt=input.value;
        if(inputSqrt.includes('E')){
            input.value=E.toFixed(5)
            console.log('нормE');
        }
        else if(inputSqrt.includes('π')){
            input.value=Pi.toFixed(5)
            console.log('нормп');
        }
        else{
        input.value=Math.sqrt(parseInt(inputSqrt.substring(1)))
        console.log('не норм');
        }
    }
    hasSqrt=false;
}
function finalEquel(){
    checkSqrtEqual()
    if ((input.value==Pi.toFixed(5))||(input.value==E.toFixed(5))){
        if(operation==='sum'){
            checkSqrtEqual()
            const result=(lastOperand+(input.value));
            let string=`${lastOperand}+${(input.value)}=${result.toFixed(5)}`
            operation=null;
            lastOperand=0;
            input.value=result.toFixed(5);
            history.textContent=string;
        }
        else if(operation==='minus'){
            checkSqrtEqual()
            const result=(lastOperand-(input.value));
            let string=`${lastOperand}-${(input.value)}=${result.toFixed(5)}`
            operation=null;
            lastOperand=0;
            input.value=result.toFixed(5);
            history.textContent=string;
        }
        else if(operation==='mult'){
            checkSqrtEqual()
            
            const result=(lastOperand*(input.value));
            let string=`${lastOperand}*${(input.value)}=${result.toFixed(5)}`
            operation=null;
            lastOperand=0;
            input.value=result.toFixed(5);
            history.textContent=string;
        }
        else if(operation==='def'){
            checkSqrtEqual()
            const result=(lastOperand/(input.value));
            let string=`${lastOperand}/${(input.value)}=${result.toFixed(5)}`
            operation=null;
            lastOperand=0;
            input.value=result.toFixed(5);
            history.textContent=string;
        }
    }
    else{
        if(operation==='sum'){
            checkSqrtEqual()
            const result=(lastOperand+parseInt(input.value));
            let string=`${lastOperand}+${parseInt(input.value)}=${result}`
            operation=null;
            lastOperand=0;
            input.value=result;
            history.textContent=string;
        }
        else if(operation==='minus'){
            checkSqrtEqual()
            const result=(lastOperand-parseInt(input.value));
            let string=`${lastOperand}-${parseInt(input.value)}=${result}`
            operation=null;
            lastOperand=0;
            input.value=result;
            history.textContent=string;
        }
        else if(operation==='mult'){
            checkSqrtEqual()
            
            const result=(lastOperand*parseInt(input.value));
            let string=`${lastOperand}*${parseInt(input.value)}=${result}`
            operation=null;
            lastOperand=0;
            input.value=result;
            history.textContent=string;
        }
        else if(operation==='def'){
            checkSqrtEqual()
            const result=(lastOperand/parseInt(input.value));
            let string=`${lastOperand}/${parseInt(input.value)}=${result}`
            operation=null;
            lastOperand=0;
            input.value=result;
            history.textContent=string;
        }
    }
}

btn_plus.addEventListener('click',function(){
    lastOperand=parseInt(input.value);
    operation='sum';
    checkSqrt()
    input.value='';
})
btn_minus.addEventListener('click',function(){
    lastOperand=parseInt(input.value);
    operation='minus';
    checkSqrt()
    input.value='';
})
btn_mult.addEventListener('click',function(){
    lastOperand=parseInt(input.value);
    operation='mult';
    checkSqrt()
    input.value='';
})
btn_def.addEventListener('click',function(){
    lastOperand=parseInt(input.value);
    operation='def';
    checkSqrt()
    input.value='';
})
btn_sqrt.addEventListener('click',function(){
    input.value+='√';
    checkSqrt()
    hasSqrt=true;
    
})


btn_clear.addEventListener('click',function(){
    lastOperand=0;
    operation=null;
    input.value='';
    history.textContent='';
})

btn_equal.addEventListener('click',function(){
    finalEquel();
})