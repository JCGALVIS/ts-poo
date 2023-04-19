export class MyDate {
  private year: number;
  private month: number;
  private day: number;

  constructor(year: number = 1993, month: number = 7, day: number = 9) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`;
  }

  private addPadding(value: number): string {
    if (value < 10) return `0${value}`;

    return `${value}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') this.day += amount;
    if (type === 'months') this.month += amount;
    if (type === 'years') this.year += amount;
  }
}

const myDate = new MyDate(2023, 4, 10);

console.log(myDate.printFormat());
