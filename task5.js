"use strict";
function ortaBal(ballar) {
    let cem = 0;
    for (let bal of ballar) {
        cem = cem + bal;
    }
    return cem / ballar.length;
}
function qiymetlendir(bal) {
    if (bal >= 90) {
        return "Əla";
    }
    else if (bal >= 70) {
        return "Yaxşı";
    }
    else if (bal >= 50) {
        return "Kafi";
    }
    else {
        return "Qeyri-kafi";
    }
}
function neticeniGoster(ad, ballar) {
    let orta = ortaBal(ballar);
    let qiymet = qiymetlendir(orta);
    console.log(`${ad}: orta bal ${orta.toFixed(2)}, qiymət: ${qiymet}`);
}
neticeniGoster("Aysel", [90, 85, 100]);
neticeniGoster("Elnur", [75, 80, 70]);
neticeniGoster("Murad", [40, 45, 50]);
