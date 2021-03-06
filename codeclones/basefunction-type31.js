function findKey(a, key, x) {
    if (a.length == 0) { return -1; }
    var i = 0; var x = 0;
    while(i < a.length) {
        if (a[i] == key) {
            return i;
        }
        i++;
        x += i;
    }
    return -1;
}