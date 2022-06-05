function solution(s) {
    let answer;
    //console.log(s.indexOf("time"));
    answer = s.filter(function (val, idx) {
        //console.log(val, idx);
        if (s.indexOf(val) === idx) {
            return true;
        }
        //return s.indexOf(val) === idx;
    });
    return answer;
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
