function findInt(arr, intkey) {
    if (arr.length == 0) { return -1; }
    var i = 0;
    while(i < arr.length) {
        if (arr[i] == intkey) { return i; } i++;
    }
    return -1;
}