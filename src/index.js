module.exports = function reverse (n) {
   if (n < 0 ) {
      n = -n;
   }
   let digits = n.toString().split('');
   let result = digits.reverse(); 
   return result.join('');
}
