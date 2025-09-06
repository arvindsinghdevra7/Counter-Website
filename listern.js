const valueCount= document.querySelector('#counter');
let negativeButton=document.querySelector('#button1');
negativeButton.addEventListener('click',()=>{
    let data= parseInt(valueCount.innerText);
    data=data-1;
    valueCount.innerText=data;
console.log(data);
});

const vlueCount= document.querySelector('#counter');
let PositiveButton=document.querySelector('#button2');
PositiveButton.addEventListener('click',()=>{
    let data= parseInt(vlueCount.innerText);
    data=data+1;
    vlueCount.innerText=data;
console.log(data);
});

