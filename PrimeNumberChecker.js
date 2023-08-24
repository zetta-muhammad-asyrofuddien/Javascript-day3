function isPrime(n) {
  // Your logic here
  // if (n <= 1) {
  //   return false;
  // } else if (n <= 3) {
  //   return true;
  // }
  // if (n % 2 === 0 || n % 3 === 0) {
  //   return false;
  // }
  // for (let i = 5; i * i <= n; i += 6) {
  //   // console.log(i);
  //   if (n % i === 0 || n % (i + 2) === 0) {
  //     return false;
  //   }
  // }
  // return true;
  /////////////////////////////////////////////////////////////////////////

  var count = 0;
  for (i = n; i > 0; --i) {
    if (n % i == 0) {
      count++;
    }
    if (count > 2) {
      return false;
    }
  }
  // console.log(count);
  if (count == 2) {
    return true;
  }
  ////////////////////////////////////////////////////////////////////////////////////////

  // if (n > 1) {
  //   if (n <= 3) {
  //     return true;
  //   }
  //   if (n % 2 === 0 || n % 3 === 0) {
  //     return false;
  //   } else true;
  //   return true;
  // }
}

console.log(isPrime(10));
console.log(isPrime(43));

for (let i = -2; i < 120; i++) {
  if (isPrime(i)) {
    console.log(i + ' : Is Prime');
  }
}
