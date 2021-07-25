import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, filterString:string,propName:string): any {
    if(value.length===0 || filterString===""){
      return value;
    }
    const arr = [];
    for(const item of value){
      
      if(item[propName]===filterString){
        arr.push(item);
      }      
    }
    return arr;
  }

}