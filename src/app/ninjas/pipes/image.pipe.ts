import { Pipe, PipeTransform } from '@angular/core';
import { Ninja } from '../interfaces/ninjas.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform( ninja: Ninja, type: string = 'image' ): string {

    if (type == 'avatar')
      return `assets/images/villages/${ninja.village}.png`
    else
      return `assets/images/ninjas/${ninja.id}.png`

  }

}
