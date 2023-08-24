/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
  // Your logic here

  //Prima harus lebih dari sama dengan 1
  if (n <= 1) {
    return false;
  }
  //2 dan 3 adalah pembagi terkecil (hanya bisa di bagi 1 dan angka itu sendiri)
  if (n <= 3) {
    return true;
  }

  //2 dan 3 adalah pembagi terkecil (hanya bisa di bagi 1 dan angka itu sendiri)
  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(10));
console.log(isPrime(43));
