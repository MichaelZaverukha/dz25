let year = +prompt('Який зараз рік?');
let month = +prompt('Який зараз місяць?');
let day = +prompt('Який зараз день?');

for (let i=year; i++;){
    for(let j=month; j<=12; j++){
      for(let k= day; k<=31; k++){
         alert(`${i}, ${j}, ${k}`)
      }
    }

}