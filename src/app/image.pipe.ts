import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return `content/images/food/${value}.jpg`;
    } else {
      console.log(args);
      return 'content/images/food/404.png';
    }
  }

}
