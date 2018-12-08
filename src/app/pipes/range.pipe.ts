import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range'
})
export class RangePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return function(input, total) {
      total = parseInt(total);
      for (var i=1; i<=total; i++)
        input.push(i);
      return input;
    };
  }




}
