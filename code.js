/* References:
 * https://github.com/COSC3020/mergesort-peppersmoke42
 * https://github.com/COSC3020/mergesort-ross223
 * https://github.com/COSC3020/mergesort-tlaceby
 * https://www.geeksforgeeks.org/iterative-merge-sort/
 * https://www.geeksforgeeks.org/in-place-merge-sort/
 * https://gemini.google.com (Answered queries on unifying iterative mergesort & in-place mergesort)
 */

function mergesort(arr){
    let len = arr.length;
    if(len <= 1){ return arr; }
    for(let i = 1; i < len; i *= 2){
        for(let j = 0; j < len; j += (2*i)){
            let end = Math.min(j + 2 * i - 1, len - 1)
            let mid = Math.min(i + j - 1, len - 1);
            merge(arr, j, mid, end);
        }
    }
    return arr;
}

function merge(arr, start, mid, end) {
    let leftInd = start;
    let rightInd = mid+1;
    while (leftInd <= mid && rightInd <= end) {
        if (arr[leftInd] <= arr[rightInd]) {
            leftInd++;
        } else {
            let val = arr[rightInd];
            for (let i = rightInd; i >= leftInd; i--) {
                arr[i] = arr[i - 1];
            }
            arr[leftInd] = val;
            leftInd++;
            rightInd++;
            mid++;
        }
    }
}