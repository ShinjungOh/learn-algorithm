function solution(s) {
    // let answer = "";
    // for (let x of s) {
    //     //console.log(x);
    //     if (x === "A") {
    //         answer += "#"
    //     } else answer += x;
    // }

    let answer = s;
    answer = answer.replace(/A/g, '#');
    return answer;
}

let str = "BANANA";
console.log(solution(str));
