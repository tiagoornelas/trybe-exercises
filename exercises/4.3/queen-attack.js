//queen's position
let queenY = 4;
let queenX = 4;

//target's position
let targetY = 4;
let targetX = 7;

let succesfulAttack = false;

if (queenY === targetY || queenX === targetX) {
    succesfulAttack = true;
}

//top right diagon attack
for (let topRight = 1; topRight < 8; topRigh += 1) {
    let queenMoveY = queenY + topRight;
    let queenMoveX = queenX + topRight;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === queenY && queenMoveX === queenX)) {
        succesfulAttack = true;
    }
}

//top left diagon attack
for (let topLeft = 1; topLeft < 8; topRigh += 1) {
    let queenMoveY = queenY + topLeft;
    let queenMoveX = queenX - topLeft;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === queenY && queenMoveX === queenX)) {
        succesfulAttack = true;
    }
}

//bottom right diagon attack
for (let bottomRight = 1; bottomRight < 8; topRigh += 1) {
    let queenMoveY = queenY - bottomRight;
    let queenMoveX = queenX + bottomRight;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === queenY && queenMoveX === queenX)) {
        succesfulAttack = true;
    }
}

//bottom left diagon attack
for (let bottomRight = 1; bottomRight < 8; topRigh += 1) {
    let queenMoveY = queenY - bottomRight;
    let queenMoveX = queenX - bottomRight;

    if (queenY > 8 || queenX > 8) {
        break;
    }

    if ((queenMoveY === queenY && queenMoveX === queenX)) {
        succesfulAttack = true;
    }
}