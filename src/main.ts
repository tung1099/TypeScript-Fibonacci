function fibonacci(n: number) {
    let f0: number = 0;
    let f1: number = 1;
    let fn: number = 1;
    if (n<0){
        return -1;
    }else if (n == 0 || n ==1 ){
        return n;
    }else {
        for (let i = 2; i < n; i++) {
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
        }
    }
    return fn;
}
let sum = 0;
for (let i = 0; i < 30; i++) {
    const fibo = fibonacci(i);
    console.log(fibo);
    sum += fibonacci(i);
}
console.log( "sum = " + sum);