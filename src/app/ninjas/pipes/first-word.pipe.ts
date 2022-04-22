import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class FirstWordPipe implements PipeTransform {

  charSeparator: string[] = [' ', ',']

  transform(word: string): string {

    const firstWord = word.split(',')[0];
    return firstWord

  }

}
