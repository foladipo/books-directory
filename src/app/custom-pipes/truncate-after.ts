import { Pipe, PipeTransform } from '@angular/core';

/*
 * Truncate a string after a stated number of characters.
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   stringValue | truncateAfter:length[:endWith]
 * Examples:
 *   {{ 'Long string' | truncateAfter }}
 *   formats to: 'Long string'
 *   {{ 'Long string' | truncateAfter:6 }}
 *   formats to: 'Lon...'
 *   {{ 'Long string' | truncateAfter:9:'[...]' }}
 *   formats to: 'Long[...]'
*/
@Pipe({ name: 'truncateAfter' })
export class TruncateAfter implements PipeTransform {
  /**
   * @method transform
   * @summary Truncates a string after a certain number of characters.
   * @param targetString - The string to be truncated.
   * @param maxLength - The length of the truncated string (including
   * whatever ending was used, like '...'). Minimum value is 6.
   * @param endWith - The last few characters to use in the truncated string to
   * show that it's been truncated e.g '...', '[...]' etc. Default is '...'.
   */
  transform(targetString: string, maxLength: number, endWith: string) {
    if (typeof targetString !== 'string') {
      return;
    }

    // Because we use an ending that is at most 5 chars long, you can only
    // truncate a string that is longer than 5 chars.
    if (typeof maxLength !== 'number' || maxLength < 6) {
      return targetString;
    }
    const lengthOfTarget = targetString.length;
    if (lengthOfTarget <= maxLength) {
      return targetString;
    }

    let endResultWith = '...';
    if (typeof endWith === 'string' && endWith.length < 6) {
      // At most, you can end the result with something like '[...]';
      endResultWith = endWith;
    }
    const stopTruncationAt = maxLength - endResultWith.length;
    const initialPartOfTarget = targetString.slice(0, stopTruncationAt);
    const result = `${initialPartOfTarget}${endResultWith}`;
    return result;
  }
}
