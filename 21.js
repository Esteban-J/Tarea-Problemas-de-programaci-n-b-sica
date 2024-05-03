function calUneven(){
    let res = 0;
    for (let i = 1; i <= 1000; i++){
        i % 2 != 0 ? res += i : 0; 
    }
    console.log(res);
}

function calEven(){
    let res = 0;
    for (let i = 1; i <= 1000; i++){
        i % 2 == 0 ? res += i : 0; 
    }
    console.log(res);
}

calEven();
calUneven();