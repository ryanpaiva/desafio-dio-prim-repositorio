function getAdmins(map) {
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Carlos', 'Admin');
usuarios.set('Antonio', 'User');
usuarios.set('Luiza', 'User');
usuarios.set('Gabriela', 'Admin');
usuarios.set('Nathan', 'Admin');

console.log(getAdmins(usuarios));

const meuArray = [30, 30, 40, 5, 223, 2049, 3035, 5];

function valoresUnicos(arr){
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(valoresUnicos(meuArray));