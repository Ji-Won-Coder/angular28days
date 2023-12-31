import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'filter',
})
export class filterPipe implements PipeTransform {
  transform(values: string[], args: string):string[] {
    
    if(!args || args.length < 3) return values;
    let result:string[]=[];

   for(const value of values){
    if(value.toLowerCase().indexOf(args.toLowerCase())>-1){
      result=[...result,value]
    }
   }
   return result;

  }

}
