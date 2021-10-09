function topla(x, y) {
    if (y) {
        return x + y;
    }
    return x;
}
var toplama = topla(1, 40);
console.log(toplama);
function davetEt(ilkDavetli) {
    var digerleri = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        digerleri[_i - 1] = arguments[_i];
    }
    return ilkDavetli + "\n " + digerleri.join("\n");
}
console.log(davetEt("berkay", "emir", "emre", "yalak"));
