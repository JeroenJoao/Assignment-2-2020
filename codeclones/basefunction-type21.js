function findKey(data, key) {
    if (data.length == 0) { return -1; }

    var index = 0;
    while(index < data.length) {
        if (data[index] == key) {
            return index;
        }
        index++;
    }
    return -1;
}