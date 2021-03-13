module.exports = function check(str, bracketsConfig) {
    let x=str.macth(/[\(\[\)\}\{\]]/g)
    if (x.length%2===0){return true}
    else {return false)}
//   for (i=0; i<str.length; i++){
//     if (str.match(/.\(\[\{/))
//   }

}
