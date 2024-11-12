let san = Number(prompt("Бір сан енгізіңіз:"));

for (let i = 1; i <= san; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i);
        if (i % 2 == 0) {
            console.log("Jup san =>BREAK!");
            break;
        }
    }
}