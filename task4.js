"use strict";
function qiymetHesabla(qiymet, endirim = 0, say) {
    let yekunQiymet = qiymet - (qiymet * endirim / 100);
    return yekunQiymet * (say ?? 1);
}
console.log(qiymetHesabla(100));
console.log(qiymetHesabla(100, 10));
console.log(qiymetHesabla(100, 10, 3));
