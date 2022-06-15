// 1️⃣ for문
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    let n = s.length;

    for (let i = 0; i < Math.floor(n/2); i++) {
        if (s[i] !== s[n - i - 1]) {
            answer = "NO";
        }
    }
    return answer;
}

let str = "gooG";
console.log(solution(str));



// 2️⃣ reverse
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();

    if (s.split('').reverse().join('') !== s) {
        answer = "NO";
    }
    return answer;
}

let str = "gooG";
console.log(solution(str));