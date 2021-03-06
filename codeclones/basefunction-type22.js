function findNumber(data, key) {
    if (data.length == 0) {
        return -1;
    }
    var i = 0;
    while(i < data.length) {
        if (data[i] == key) {
            return i;
        }
        i++;
    }
    return -1;
}