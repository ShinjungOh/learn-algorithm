function solution(s) {
    // let answer, max = Number.MIN_SAFE_INTEGER;
    // for (let x of s) {
    //     if (x.length > max) {
    //         max = x.length;
    //         answer = x;
    //     }
    // }

    // let answer = "";
    // for (let x of s) {
    //     if (x.length > answer.length) {
    //         answer = x;
    //     }
    // }

    let answer = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i].length > answer.length) {
            answer = s[i];
        }
    }
    return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));