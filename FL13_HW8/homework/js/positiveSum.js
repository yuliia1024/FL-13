function posSum (arr){
    let sum = 0;
    arr.forEach((item)=>{
        if(item>0){
            sum+= item;
            }
        }
    )
    return sum;
}
console.log(posSum([-145,-12]));