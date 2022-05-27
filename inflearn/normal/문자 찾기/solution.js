function solution(s, t) {
    let answer = 0;
    for (let x of s) {
        if (x === t) {
            answer++;
        }
    }
    return answer;

    // let answer = s.split(t).length; // split 사용 시 해당 문자가 맨 뒤에 있을 경우, 맨 뒤에 빈 문자열 출력
    // return answer - 1;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));