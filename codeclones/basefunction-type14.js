function findNumber(a, key) {
    if (a.length == 0) {return -1;} var index = 0;
    while(index < a.length) {
        if (a[index] == key) { return index; } index++;
    }
    return -1;
}