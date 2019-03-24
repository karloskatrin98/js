let myMoney = (prompt("question"));
let howManyApp = (prompt("question"));
let priceOfApples = (howManyApples * prompt("question"));
let howManyLoaves = (prompt("question"));
let priceOfLoaves = (howManyLoaves * prompt("question"));
let result = myMoney >= priceOfLoaves + priceOfApples;
document.body.innerHTML = result;