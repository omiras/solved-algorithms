// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
  let score = 0;
  
  for (let i = 0; i < games.length; i++) {
     [x, y] = games[i].split(":").map(Number);
    if (x > y) {
      score += 3;
    } else if (x === y) {
      score += 1;
    }
  }
  
  return score;
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]) , 30);
console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]) , 10);
console.log(points(["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]) , 0);
console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]) , 15);
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]) , 12);