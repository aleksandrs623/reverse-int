module.exports = function reverse (n) {
    let str = String(n);
    let reverse = str.split('').reverse().join('');
    if (str[0] == "-") {
        let cut = str.substring(1);
        return cut.split('').reverse().join('');
    } else
    return reverse;
}



