function qiymetHesabla(qiymet: number, endirim: number = 0, say?: number): number {
    let yekunQiymet = qiymet - (qiymet * endirim / 100);

    return yekunQiymet * (say ?? 1);
}

console.log(qiymetHesabla(100));
console.log(qiymetHesabla(100, 10));
console.log(qiymetHesabla(100, 10, 3));