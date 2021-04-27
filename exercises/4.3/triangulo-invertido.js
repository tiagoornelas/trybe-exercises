let n = 5;
let texto = '*';
let espaco = ' ';
let escreve = '';

for (let fator = 0; fator < n; fator += 1) {
    let espacos = n - fator;
    while (espacos > 0) {
        escreve += espacos;
    }
    escreve += fator * texto;
    console.log(escreve);
}
