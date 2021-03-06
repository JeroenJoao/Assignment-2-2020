function findNumber(a, key, found) {
    var found = false;
    if (a.length == 0) {
        found = true; return -1;
    }
    var index = 0;
    while(index < a.length) {
        if (a[index] == key) {
            found = true; return index;
        }
        index++;
    }
    found = false;
    return -1;
}