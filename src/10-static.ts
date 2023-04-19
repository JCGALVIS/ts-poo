class MyMath {
  static readonly PI = 3.14;

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max >= item ? max : item));
  }
}

console.log(MyMath.PI);
console.log(MyMath.max(1, 2, 3, 4, 45));
console.log(MyMath.max(-1, -9, -8));
