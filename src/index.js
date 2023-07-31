module.exports = function reverse (n) {
    n = Math.abs(n); 
    let reversNumber='';
    while (n>0){
        reversNumber += n % 10;
        n = Math.floor(n / 10);
    };
    return Number(reversNumber)
};
