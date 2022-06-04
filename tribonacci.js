// This is the link to this JavaScript Coding Challenge
// https://www.codewars.com/kata/556deca17c58da83c00002db/train/javascript

function tribonacci(signature,n){
    // We use the reduce function to take the initila sum of the signature variable and push it to the sumarr array. We initialize the value of arrlength as the length of the signature array. We will use the index n-1 in the while loop which serves as a counter of how many elements are already in the signature.
    sumarr = signature.reduce(
        (a, b) => a + b,
    )
    signature.push(sumarr)
    
    // We create an array temparr, which we will use to push the last 3 elements of the signature array. Then take the sum of those 3 elements and push it to the signature array. 
    arrlength = signature.length
    while(arrlength<=(n-1)){
        temparr = []
        for(i=signature.length-1; i>=signature.length-3; i--){
            temparr.push(signature[i])
        }
        temparrsum = temparr.reduce(
            (a, b) => a + b,
        )
        signature.push(temparrsum)
        arrlength++
    }
    console.log(signature)
}
tribonacci([1,1,1],10)
console.log('=====')
tribonacci([0,0,1],10)
console.log('=====')
tribonacci([0,1,1],10)
console.log('=====')
tribonacci([1,2,3],10)