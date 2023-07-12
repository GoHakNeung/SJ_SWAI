
var  i = 92039043434;
var formator = new Intl.NumberFormat("ko",{
    notation: "compact",
    style:'currency'
   
})
console.log(formator.format(i));

