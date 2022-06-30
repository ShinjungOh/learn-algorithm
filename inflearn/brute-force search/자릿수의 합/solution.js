function solution(n, arr) {
    let answer, max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {

        // 1️⃣
        let sum = 0, tmp = arr[i];
        while (tmp) {
            sum += (tmp % 10);
            tmp = Math.floor(tmp / 10);
        }
        // console.log(sum);

        // 2️⃣
        let sum = arr[i].toString().split('').reduce((a, b) => a + Number(b), 0)
        // console.log(sum);

        if (sum > max) {
            max = sum;
            answer = arr[i];
        } else if (sum === max) {
            if (arr[i] > answer) {
                answer = arr[i];
            }
        }
    }

    return answer;
}


let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
