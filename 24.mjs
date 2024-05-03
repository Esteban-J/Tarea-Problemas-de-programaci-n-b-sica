function testPrime(num){
    if (num < 1)
        throw "El número es menor que la unidad"
    if (num % 2 === 0 || (num % 3 === 0 && num != 3)) {
        console.log("El número " + num + " no es primo");
    }
    else 
        console.log("El número " + num +  " es primo"); 
}

try{
testPrime(11);
}
catch(e){
    console.log(e);
}
    
export default testPrime;