window.b = "test";

let obj = {
  b: this,
  get: function () {
    console.log(this.b === window);
  },
};

obj.get();

// ---------------------------------

function test() {
  var bar = function () {
    return 3;
  };

  return bar();

  function bar() {
    return 8;
  }
}

console.log(test()); //3

function test() {
  function bar() {
    return 3;
  }

  return bar();

  function bar() {
    return 8;
  }
}

console.log(test()); //8 will be printed, I said error

//Q./////////////////////////////////////////////////////////
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying

//*********************************************** */

function foo() {
  console.log("foo.1");
  setTimeout(() => {
    console.log("foo.3 timeout");
  });
  new Promise(function (resolve, reject) {
    //resolve("foo.4 promise")
    setTimeout(() => resolve("foo.4 promise"), 0);
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
  console.log("foo.2");
}

function foo1() {
  console.log("foo1..1");

  console.log("foo1..2");
}

foo();
foo1();
