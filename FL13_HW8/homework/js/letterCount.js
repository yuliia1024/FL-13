function letterCount(phrase,letter ) {
    let sum = 0;
    for (let char of phrase){
        if (char === letter) {
            sum++;
        }
        else;
    }
    return sum;
}
console.log(letterCount('maggie', 'g'));