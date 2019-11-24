import { Injectable } from '@angular/core';
import {interval, Observable, of} from "rxjs";
import {delay, switchMap, take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ResImageService {

  constructor() { }
  postReqImage(data:any) : Observable<any> {
/*
      return of().pipe(
        switchMap(() =>interval(2000)),
        take(2),
        switchMap(() => of({res:200})),
        switchMap(() => of({res:201, title:'New Title'}))
      );
*/
      return of({res:201, data:'New Title'}).pipe(delay(4000));


    /*
    return this._http.post('url', toFormData(sample_data));
      ;
    */

  }
}
export function toFormData<T>( formValue: T ) {
  const formData = new FormData();

  for ( const key of Object.keys(formValue) ) {
    const value = formValue[key];
    formData.append(key, value);
  }

  return formData;
}
