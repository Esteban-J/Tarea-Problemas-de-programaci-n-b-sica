function factorial(x){
    if (x == 1)
        return x;
    x = x * factorial(x - 1);
    return x;
}

console.log(factorial(5));

export default factorial;