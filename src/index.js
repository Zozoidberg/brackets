module.exports = function check(str, bracketsConfig) {
  copyStr = str
  for(let i = 0; i <= copyStr.length + 2; i++){
    for (let items of bracketsConfig){
      while(copyStr.includes(items[0] + items[1])){
        copyStr = copyStr.replace(items[0] + items[1], '');
      }
    }
  }
  return !copyStr.length
}
