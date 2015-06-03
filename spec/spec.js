var myCode = require('./../app.js');

describe('#sum()', function(){
  it('adds two numbers', function(){
    expect(myCode.sum(1,1)).toEqual(2);
    expect(myCode.sum(4,4)).toEqual(8);
  });
});

describe('#divide()', function(){
  it('divides two numbers', function(){
    expect(myCode.divide(10,2)).toEqual(5);
  });
});

describe('#remainder()', function(){
  it('finds the remainder between two numbers', function(){
    expect(myCode.remainder(11,2)).toEqual(1);
  });
});

describe('#average()', function(){
  it('finds the average of two numbers', function(){
    expect(myCode.average(2,4)).toEqual(3);
  });
});

describe('#isPrime()', function(){
  it('tests if a number is prime', function(){
    expect(myCode.isPrime(8)).toEqual(false);
  });
});
