//queen's position
let queenY = 4;
let queenX = 4;

//target's position
let targetY = 1;
let targetX = 1;

let succesfulAttack = false;

if (queenY === targetY || queenX === targetX) {
    succesfulAttack = true;
}

//top right diagon attack
for (let topRight = 1; topRight < 8; topRight += 1) {
    let queenMoveY = queenY + topRight;
    let queenMoveX = queenX + topRight;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === targetY && queenMoveX === targetX)) {
        succesfulAttack = true;
    }
}

//top left diagon attack
for (let topLeft = 1; topLeft < 8; topLeft += 1) {
    let queenMoveY = queenY + topLeft;
    let queenMoveX = queenX - topLeft;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === targetY && queenMoveX === targetX)) {
        succesfulAttack = true;
    }
}

//bottom right diagon attack
for (let bottomRight = 1; bottomRight < 8; bottomRight += 1) {
    let queenMoveY = queenY - bottomRight;
    let queenMoveX = queenX + bottomRight;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === targetY && queenMoveX === targetX)) {
        succesfulAttack = true;
    }
}

//bottom left diagon attack
for (let bottomLeft = 1; bottomLeft < 8; bottomLeft += 1) {
    let queenMoveY = queenY - bottomLeft;
    let queenMoveX = queenX - bottomLeft;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === targetY && queenMoveX === targetX)) {
        succesfulAttack = true;
    }
}

console.log(succesfulAttack);