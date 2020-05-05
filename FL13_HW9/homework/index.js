function convert(){
    const resArr = [];
    for (let i = 0; i < arguments.length; i++){
        if (typeof arguments[i]==='string'){
            resArr.push(Number(arguments[i]));
        }
        if (typeof arguments[i]==='number'){
            resArr.push(String(arguments[i]));
        }
    }
    return resArr;
}
function executeforEach(arr, callback){
    for(let i= 0; i<arr.length; i++){
        callback(arr[i],i,arr);
    }
}
function mapArray(arr,action){
    executeforEach(arr,function (el,i, arr) {
    arr[i] = action(+el);
    });
    return arr;
}
function filterArray(arr, action) {
    const filteredArr = [];

    executeforEach(arr, function(el) {
        return action(el) ? filteredArr.push(el) : undefined;
    });

    return filteredArr;
}
function containsValue(arr, param){
    let res = false;
    executeforEach(arr, function(el){
    if(el===param){
        res = true;
        }
    });
    return res;
}
function flipOver(str) {
    let resultStr = '';
    str = str ? String(str) : '';
    for (let i = 0; i < str.length; i++) {
        resultStr = str[i] + resultStr;
    }
    return resultStr;
}
function makeListFromRange(range){
let resArr = [];
if(range){
    for(let i=parseInt(range[0]); i<=parseInt(range[1]);i++){
     resArr.push(i);
    }
}
return resArr;
}
function getArrayOfKeys(dataset, keyName) {
    const resultArr = [];

    executeforEach(dataset, function (obj) {
        return obj[keyName] ? resultArr.push(obj[keyName]) : undefined;
    });

    return resultArr;
}
function substitute(arr) {
    const sblimiter1 = 20;
    const sblimiter2 = 10;
    const resultArr = [];

    mapArray(arr, function(el) {
        resultArr.push((el < sblimiter1 && el>sblimiter2) ? '*' : el);
    });

    return resultArr;
}
function getPastDay(date, daysAgo) {
    const milliseconds = 86400000;
    const pastDate = new Date(date.getTime() - milliseconds * daysAgo);
    return pastDate.getDate();
}
function formatDate(date) {
    let HH = date.getHours();
    let mm = date.getMinutes();

    const PAD = 10;
    if (HH < PAD) {
        HH = '0' + HH;
    }
    if (mm < PAD) {
        mm = '0' + mm;
    }

    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${HH}:${mm}`;
}
