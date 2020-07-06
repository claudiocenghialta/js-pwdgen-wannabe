var nome=prompt('Inserisci il tuo Nome');
console.log(nome);
var cognome=prompt('Inserisci il tuo Cognome');
console.log(cognome);
var colore=prompt('Inserisci il tuo colore preferito');
console.log(colore);
var returnPassword = nome+cognome+colore+'19';
document.getElementById('return-password').innerHTML=returnPassword;