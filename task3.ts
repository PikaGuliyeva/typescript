const adlar: string[] = ["Aysel", "Elnur", "Murad", "Leyla"];

console.log("Say:", adlar.length);
console.log("İlk tələbə:", adlar[0]);

adlar.push("Nigar");
for (let ad of adlar) {
    console.log(ad);
}

// adlar.push(25);