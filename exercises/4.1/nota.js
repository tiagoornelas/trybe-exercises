let nota = 85;
let status;

if (nota >= 80) {
    status = "aprovada";
} else if (nota >= 60 && nota < 80) {
    status = "lista";
} else {
    status = "reprovada";  
}

switch (status) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado!");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case "reprovada":
        console.log("Você foi reprovado!");
        break;
    default:
        console.log("Não se aplica!");
        break;
}