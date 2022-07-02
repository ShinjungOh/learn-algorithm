function isPrime(num) {
    if (num === 1) {
        return false;
    }
    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {

        // 1️⃣
        let res = 0;
        while (arr[i]) {
            let t = arr[i] % 10;
            res = res * 10 + t;
            arr[i] = parseInt(arr[i] / 10);
        }

        // 2️⃣
        let res = Number(arr[i].toString().split('').reverse().join(''));

        if (isPrime(res)) {
            answer.push(res);
        }
    }

    return answer;
}


let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));