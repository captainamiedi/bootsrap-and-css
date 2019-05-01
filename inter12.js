
const evalButton = document.getElementById('btn-evaluate');
const display = document.querySelector('.display');

evalButton.addEventListener('click', function (e){
    e.preventDefault();
    const inputArr = document.getElementById('userInput').value;
    const x = inputArr.split('');
    let sum = 0;
    if(x.length < 3){
        //console.log('enter value')
        let mess = 'Please Enter a Mininum of 3 dice numbers';
        display.innerHTML = mess;
    }else if ((x >= '7')){
        let err1 = 'Pleasse, Enter Value Between 1 - 6';
        //console.log('enter')
       display.innerHTML = err1;
    }else{
        for(let i = 0; i < x.length; i++){
            x[i] = Number(x[i]);
            if(x[i] === 6 && (x[i + 1] == 1)){
                x[i + 1] = x[i + 1]*2;
                x[i + 2] = 0;
            }else if(x[i] === 6 && (x[i + 1] !== 1)){
                x[i + 1] = x[i + 1]*2;
            }


            if(x[i] === 1){
            x[i + 1] = 0;
            }
            
            
            sum = sum + x[i];
            display.innerHTML = sum;
        }    //console.log(sum);
          
    }
});