import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterdata',
    pure: false
})
export class SearchedFilter implements PipeTransform{
    transform(value: any, category: string, propName: string): any {
        if (value.length === 0 || category === "") {
          return value;
        }
        const results = [];
        for(const item of value){
            if(item[propName] === category){
                results.push(item);
            }
        }
        return results;
      }

}