module.exports = {
  sum: function(a,b){
    return a + b;
  },
  divide: function(a,b){
    return a / b;
  },
  remainder: function(a,b){
    return a % b;
  },
  average: function(a,b){
    return (a+b)/2
  },
  isPrime: function(a){
    for(var i = 2; i < a; i++){
      if(a % i === 0){
        return false;
      }
    }
    return true;
  },
}
