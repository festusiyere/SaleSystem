import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addComma'
})
export class AddCommaPipe implements PipeTransform {

  transform(value: number): string {
    return value.toLocaleString();
  }

}
