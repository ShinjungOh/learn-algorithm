function solution(arr) {
    let answer = 0;
    let result = [];
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let current = arr[i][j];
            let top = (i === 0) ? 0 : arr[i - 1][j];
            let right = (j === arr[i].length - 1) ? 0 : arr[i][j + 1];
            let bottom = (i === n - 1) ? 0 : arr[i + 1][j];
            let left = (j === 0) ? 0 : arr[i][j - 1];

            if (top < current && right < current && bottom < current && left < current) {
                result.push(current);
                answer++;
            }
        }
    }
    console.log(result);
    return answer;
}

let arr = [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2]];
console.log(solution(arr));