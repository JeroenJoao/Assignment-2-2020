function find(data, x) {
    if (data.length == 0) { return -1; }
    var i = 0;
    while(i < data.length) {
        if (data[i] == x) {
            return i;
        }
        index++;
    }
    return -1;
}