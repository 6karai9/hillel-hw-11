function funcPow(num, degree) {
  if (degree === 0) {
    return 1;
  } else {
    return num * funcPow(num, degree - 1);
  }
}

console.log(funcPow(2, 3));
console.log(funcPow(3, 5));
console.log(funcPow(5, 4));
