import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyprefixPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return 'Rs.'+parseFloat(value.toFixed(2)).toLocaleString() ;
  }

}
