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

  get month() {
    return this._month;
  }

  set month(value: number) {
    if (value >= 1 && value <= 12) {
      this._month = value;
    }else {
      throw new Error('Month out of range')
    }
  }
}

const myDate = new MyDate(2023, 4, 10);

console.log(myDate.printFormat());
myDate.month = 12;
console.log(myDate.month);
