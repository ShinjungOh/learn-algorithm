function solution(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
        if(!isNaN(str[i])) {
            answer += str[i];
        }
    }
    return parseInt(answer);

    // parseInt 사용x
    // let answer = 0;
    // for (let i = 0; i < str.length; i++) {
    //     if (!isNaN(str[i])) {
    //         answer = answer * 10 + Number(str[i]);
    //     }
    // }
    // return answer;
}

let str = "g0en2T0s8eSoft";
console.log(solution(str));