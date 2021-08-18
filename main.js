function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const toString = pin + ''
    if (toString.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}

function generatePin() {
    const inputPin = document.getElementById('display-pin');
    inputPin.value = getPin()
}
//user input
document.getElementById("key-pad").addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers')
    const previousNumber = calcInput.value;
    const newNumber = number;
    const displayNumber=previousNumber + newNumber;
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
        if(number=="<"){
            const decrease=displayNumber.substring(0,displayNumber.length-2)
            calcInput.value = decrease;
        }
    } else {
        calcInput.value = displayNumber;
    }
})
function errorMsg(){
    
}
function verification(){
    const counterField=document.getElementById('try-counter');
    const counter=parseInt(counterField.innerText);
   
    
    const pin=document.getElementById('display-pin').value;
    const  typedNumbers=document.getElementById('typed-numbers').value;
    const emptyMessage=document.getElementById('notify-empty');
    const successMessage=document.getElementById('notify-success');
    const errorMessage=document.getElementById('notify-fail');
    const limitErrorMessage=document.getElementById('notify-limit');
    if(pin==''||typedNumbers==''){
        emptyMessage.style.display='block'
    }
    else if(pin==typedNumbers){
        successMessage.style.display='block'
        errorMessage.style.display='none'
        emptyMessage.style.display='none'
    }else{
        if(counter>0){
            counterField.innerText=counter-1
            errorMessage.style.display='block'
            successMessage.style.display='none'
            emptyMessage.style.display='none'
        }
        if(counter<=1){
          document.getElementById('submit').setAttribute('disabled',true)
          document.getElementById('pin').setAttribute('disabled',true)
          limitErrorMessage.style.display='block'
          errorMessage.style.display='none'
        }
        
    }
}