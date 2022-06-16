function solution(s) {
    let answer="YES";
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    // console.log(s);
    // console.log(s.split('').reverse().join(''));
    if (s.split('').reverse().join('') !== s){
        answer = "NO";
    }

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(str));
