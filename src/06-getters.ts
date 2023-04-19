export class MyDate {
  private _year: number;
  private _month: number;
  private _day: number;

  constructor(year: number = 1993, month: number = 7, day: number = 9) {
    this._year = year;
    this._month = month;
    this._day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this._year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this._day += amount;
    if (type === 'months') this._month += amount;
    if (type === 'years') this._year += amount;
  }

  get day() {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true;
    if (this._year % 100 === 0) return false;
    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(2023, 4, 10);

console.log(myDate.printFormat());
console.log(myDate.day);
console.log(myDate.isLeapYear);

const myDate1 = new MyDate(2000, 4, 10);

console.log(myDate1.printFormat());
console.log(myDate1.day);
console.log(myDate1.isLeapYear);

const myDate2 = new MyDate(2001, 4, 10);

console.log(myDate2.printFormat());
console.log(myDate2.day);
console.log(myDate2.isLeapYear);

const myDate3 = new MyDate(2004, 4, 10);

console.log(myDate3.printFormat());
console.log(myDate3.day);
console.log(myDate3.isLeapYear);
