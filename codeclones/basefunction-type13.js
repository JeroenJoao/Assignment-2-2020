function findNumber(a, key) {
    if (a.length == 0) { return -1; }
    var index = 0;
    while(index < a.length) {
        if (a[index] == key) { return key; } index++;
    }
    return -1;
}

find([1,2,3,4,5,6], 6);