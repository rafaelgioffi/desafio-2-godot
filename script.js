const victories = parseInt(prompt('Quantas vitórias?'));
const losts = parseInt(prompt('Quantas derrotas?'));

function calculateRanked(victories, losts) {
   return parseInt(victories - losts);
    }
    
let rounds = calculateRanked(victories, losts);
let level;

if(rounds > 0 && rounds <= 10) {level = 'Ferro'; }
if(rounds > 10 && rounds <= 20) {level = 'Bronze'; }
if (rounds > 20 && rounds <= 50) { level = 'Prata'; }
if (rounds > 50 && rounds <= 80) { level = 'Ouro'; }
if (rounds > 80 && rounds <= 90) { level = 'Diamante'; }
if (rounds > 90 && rounds <= 100) { level = 'Lendário'; }
if (rounds > 100) { level = 'Imortal'; }

console.log('O Herói tem de saldo de **{' + rounds + '}** e está no nível de **{' + level + '}**');
