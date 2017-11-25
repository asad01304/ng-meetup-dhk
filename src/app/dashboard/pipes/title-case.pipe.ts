import { Pipe, PipeTransform } from '@angular/core';

/**
* Title case pipe transform strings to title case
*/
@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  /**
  * Transform string to title case
  */
  transform(value: any, args?: any): any {
    if (!value) {
      return '';
    }

    return value.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase() ));
  }

}
