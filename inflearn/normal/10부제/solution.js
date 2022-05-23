function solution(day, arr) {
    let answer = 0;
    // for (let x of arr) {
    //     if (x % 10 === day) answer++;
    // }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 10 === day) {
            answer++;
        }
    }
    return answer;
}

arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr));

arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2));



