let check = Number(prompt('enter check number:'));
let tip = Number(prompt('enter tip percentage:'));
let totalSum = check*(tip/100) + check;
!(check>=0 && tip>=0 && tip<=100 && totalSum>=0) ? alert('Invalid input data.') :
    alert('total sum to pay: ' + totalSum.toFixed(2));