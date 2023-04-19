// function getValue(value: unknown) {
//   return value;
// }

import { Dog } from './09-protected';

// function getValue(value: string | number) {
//   return value;
// }

function getValue<myType>(value: myType) {
  const array: myType[] = [value];
  return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toLowerCase();
getValue<number[]>([1, 3, 0, 12]).forEach;
const luna = new Dog('Luna', 'Juan');
getValue<Dog>(luna).greeting;
