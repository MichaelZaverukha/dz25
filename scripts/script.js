let min = 0;
let max = 100;
let answer = '';

while (answer !== '=='){
   let guess = Math.round((min+max) / 2);
   let question = prompt (`Ваше загадане число >${guess}, <${guess} або =${guess}?`);
   if (question === '>'){
      min = guess+1;
   }else if (question === '<'){
      max = guess-1;
   }else if (question === '=') {
      alert(`Я відгадав! Ваше число - ${guess}`);
      break;
   }else{
      alert('Сталась помилка, введіть дані будь-ласка');
   }
}

