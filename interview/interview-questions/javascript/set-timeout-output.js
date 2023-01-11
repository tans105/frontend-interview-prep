/**
 * Give outpout for the settimeout
 * Company - Unacademy
 */

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

a();

// Output - 3,3,3

// var doesn't have a block scope.
// setTimeout runs in the task queue and it will wait for code to run completely
// By the time setTimeout kicks in, value of i would be 3

// this will fix if we do this

function b() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function log() {
      console.log(i);
    }, i * 1000);
  }
}

b();

// Each time the code runs in the loop, the value of i would change. It would create 3 scope
