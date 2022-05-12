function solution(arr) {
//     let sum = 0;
//         for(let i = 0; i < arr.length; i++) {
//             //console.log(arr[i])
//         sum = sum + arr[i]
//         };

//     console.log(sum);
//     return sum / arr.length;

    // let sum = arr.reduce((acc, curr, index) => {
    //     console.log(acc, curr);
    //     return acc + curr;
    // }, 0);
    // console.log(sum);
    // return sum / arr.length;

    const sum = (a, b) => a + b;
    const result = arr.reduce(sum, 0);

    return result / arr.length;
}