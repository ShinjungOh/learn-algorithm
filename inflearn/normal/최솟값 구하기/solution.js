function solution(arr) {
    // let answer, min = Number.MAX_SAFE_INTEGER; // 큰 수로 초기화
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] < min) min = arr[i];
    // }
    // answer = min;
    // return answer;

    let answer, min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    answer = min;
    return answer;

    // let answer = Math.min.apply(null, arr);
    // let answer = Math.min(...arr); // 배열을 넘길 때는 전개연산자 사용
    // let answer = Math.max(...arr);
    // return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));