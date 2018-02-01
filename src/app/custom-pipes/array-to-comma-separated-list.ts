import { Pipe, PipeTransform } from '@angular/core';

/*
 * Converts an array of strings to a comma-separated list.
 * Samples:
 * ['one', 'two'] becomes 'one and two'.
 * ['Paul', 'Sarah', 'Ayo'] becomes 'Paul, Sarah and Ayo'.
 * ['house'] becomes 'house'.
 * Usage:
 *   array | arrayToCommaSeparatedList
 * Example:
 *   {{ ['Paul', 'Sarah', 'Ayo'] | arrayToCommaSeparatedList }}
 *   formats to: 'Paul, Sarah and Ayo'
*/
@Pipe({ name: 'arrayToCommaSeparatedList' })
export class ArrayToCommaSeparatedList implements PipeTransform {
  transform(someStrings: Array<string>): string {
    if (!Array.isArray(someStrings)) {
      return someStrings;
    }

    const numOfStrings = someStrings.length;
    if (numOfStrings === 0) {
      return;
    }
    if (numOfStrings === 1) {
      return someStrings[0];
    }

    let commaSeparated = '';
    someStrings.forEach((str, index) => {
      if (index === (numOfStrings - 2)) {
        commaSeparated += `${str} `;
        return;
      }
      if (index === (numOfStrings - 1)) {
        commaSeparated += `and ${str}`;
        return;
      }
      commaSeparated += `${str}, `;
    });
    return commaSeparated;
  }
}
