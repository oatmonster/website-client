import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class DateService {

  private months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor() { }

  formatDate( date: string | number | Date ): string {
    const parse = new Date( date );
    let year = parse.getFullYear();
    let month = parse.getMonth();
    let day = parse.getDate();
    return `${this.months[ month ]} ${day}, ${year}`;
  }
}
