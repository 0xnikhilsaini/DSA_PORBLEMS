class Solution{
    remove_duplicate(arr,n){
        let temp = [];
        let j = 0;
        for(let i = 0;i<n-1;i++) {
            if(arr[i]!=arr[i+1]) {
                temp[j++] = arr[i];
            }
        }
        temp[j++] = arr[n-1];
        for(let i=0;i<j;i++) {
            arr[i] = temp[i];
        }
         return j;
    }
    
   
}
