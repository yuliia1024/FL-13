let countPoints = (arr) => {
   let str = arr.toString();
   let res = 0;
   let pointsWin = 3;
   let pointLoose = 0;
   let pointDraw = 1;
   for (let i = 0; i < str.length; i++) {
       if (i % 2 == 1){continue;}
       if(str[i]<str[i+2]){
           res +=pointLoose;
           i+=2;
       }
       else if(str[i]>str[i+2]){
           res +=pointsWin;
           i+=2;
       }
       else{
           res +=pointDraw;
           i+=2;
       }
   }
    return res;
}

console.log(countPoints(['1:1', '1:2', '2:0', '4:2', '0:1', '2:3', '1:1', '0:1', '1:1', '3:0']));
