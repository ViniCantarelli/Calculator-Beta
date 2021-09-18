"use strict";
/*
	
	{Viniciu Lins -  April 23 2021}
*/


document.querySelector('.btn-add').style.background = 'lightblue';
document.querySelector('.btn-sub').style.background = 'lightyellow';
document.querySelector('.btn-div').style.background = 'red';
document.querySelector('.btn-mul').style.background = 'lightgreen';

const col = document.getElementsByClassName('btn-grey');
let lastBtn = col[col.length - 1];

for (let i = 0; i < col.length; i++) {
    col[i].style.color = 'blue';
  }




lastBtn.style.backgroundColor = 'black';
lastBtn.style.color = 'white';

var first = lastBtn.parentNode;
var newB = document.createElement('button');
newB.innerHTML =    '<button type="button" class="btn7  btn-grey" style="color: white; background-color: grey">MS</button>';
first.insertBefore(newB.firstChild, lastBtn);
newB.innerHTML = '<button type="button" class="btn7  btn-grey" style="color: white; background-color: grey">MC</button>';
first.insertBefore(newB.firstChild, lastBtn);
newB.innerHTML = '<button type="button" class="btn7  btn-grey" style="color: white; background-color: grey">MR</button>';
first.insertBefore(newB.firstChild, lastBtn);

const result = document.getElementsByClassName('buttons7');
const screen = document.getElementById('input');





for(let results of result){

results.addEventListener('click',function(event){
    let verify = event.target.textContent;
    let finalResult = document.getElementById('equal');
    let value = event.target.dataset.num;
    screen.value += value;
    let memoryResult;
    
    
 
    finalResult.addEventListener('click',function(event){
        
        if(screen.value === ''){
            alert('Please Enter a Value');
            screen.value = '0';
        }else{
            screen.value = eval(screen.value);
        }
    });
    if(verify === 'MS'){
        
        
        memoryResult = screen.value;
        console.log(memoryResult);
    }
     if(verify === 'MC'){
        memoryResult = '';
        console.log(memoryResult);
    }
      if(verify === 'MR'){
          
        screen.value = memoryResult;
    }
    
    if(verify === 'C' ){
    screen.value = '';
  }
});
   
    
    results.addEventListener('mouseover',function(event){
    event.target.style.backgroundColor = 'red';
    
},true);
results.addEventListener('mouseout',function(event){
    event.target.style.backgroundColor = '';
    lastBtn.style.backgroundColor = 'black';
    document.querySelector('.btn-add').style.background = 'lightblue';
document.querySelector('.btn-sub').style.background = 'lightyellow';
document.querySelector('.btn-div').style.background = 'red';
document.querySelector('.btn-mul').style.background = 'lightgreen';
    
},true);

  }
                         
 screen.style.textAlign = 'right';













                       
