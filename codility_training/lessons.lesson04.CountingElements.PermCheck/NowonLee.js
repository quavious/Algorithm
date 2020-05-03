// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    A.sort(function(a,b){return a-b})
    if(A[0] !== 1) return 0;
    if(A[A.length-1] !== A.length) return 0
    var r = 1
    for(var i =0;i<A.length-1;i++){
        if(A[i+1] - A[i] !== 1){
            r = 0
            break
        }
    }
    return r
}

console.log(solution([4,1,3]) === 0)