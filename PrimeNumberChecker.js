function isPrime(n) {
  // Your logic here

  //Prima harus lebih dari sama dengan 1
  if (n <= 1) {
    return false;
  } else if (n <= 3) {
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

for (let i = 0; i < 50; i++) {
  if (isPrime(i)) {
    console.log(i + ' : Is Prime');
  }
}
