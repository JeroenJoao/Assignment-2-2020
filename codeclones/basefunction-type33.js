function findNumber(arr, number) {
    if (arr.length == 0) return -1;
    var x = 0;
    while(x < arr.length) {
        if (arr[x] == number) {
            return x;
        }
        x++;
    }
    return -1;
}