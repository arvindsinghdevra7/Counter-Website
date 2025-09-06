let countValue =document.querySelector('#counter');

function decrement(){
    let value =parseInt(countValue.innerText);
    // decrease value
      value=value-1;
    //   update value
    countValue.innerText=value;
}
function increment(){
    let value =parseInt(countValue.innerText);
    // increase value
    value=value+1;
    // update value
    countValue.innerText=value;
}