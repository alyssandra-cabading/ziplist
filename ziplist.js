const alpha = ['a', 'b', 'c'];
const num = [1, 2, 3];

function ziplist(letter, number) {
  const arrNew = [];
  for (let i = 0; i < letter.length; i++) {
    arrNew.push(letter[i], number[i]);
  }
  return arrNew;
}
console.log(ziplist(alpha, num));

function zipListTheSimpleWay(letter, number) {
  return _.flatten(_.zip(letter, number));
}
console.log(zipListTheSimpleWay(alpha, num));
