//solução 1
function verificaPalindromo(string) {
    if(!string) return "String inexistente";

   return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("omo"));

//solução2
//omo - 012
//abba - 0123
function verificaPalindromo2(string) {
    if(!string) return "String inexistente";

    for(let i = 0; i < string.lenght /2; i++){
        if(string[i] !== string[string.lenght -1 - i]){
        return false;
        }
    }

    return true;
}

console.log(verificaPalindromo2("abba"))