function isPrime(n) {
  // Your logic here

  if (n <= 1) {
    return false;
  } else if (n <= 3) {
    return true;
  }

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
console.log(isPrime(111));

for (let i = 0; i < 120; i++) {
  if (isPrime(i)) {
    console.log(i + ' : Is Prime');
  }
}
