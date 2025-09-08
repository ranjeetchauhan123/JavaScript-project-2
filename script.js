let name = document.querySelector('.name');
let btn = document.querySelector('.button');    
let total = document.querySelector('.total');
let value = document.querySelector('.amount')
let ul = document.querySelector('ul');

let sum = 0;
btn.addEventListener('click', function(){
let value = document.querySelector('.amount').value;
    let amount = Number(value);
    sum = sum+amount;
    total.textContent = sum;

let list = document.createElement('li');    
    list.append(name.value,' : '+amount);
    ul.appendChild(list);

let delbtn = document.createElement('button');
    delbtn.innerText = ('❌');
    list.appendChild(delbtn);
    delbtn.style.marginLeft =('20px');

    delbtn.addEventListener('click', function(){
        list.remove();
        sum = sum- amount;
        total.textContent = sum;        
    });  
    name.value = ('');
    amount.value = ('');      
});