import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {delay, map, take} from "rxjs/operators";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResImageService {
  url = "http://t3qlab.iptime.org:1810/action";
  constructor(private http: HttpClient) { }
  postReqImage(data:any) : Observable<any> {
/*
      return of().pipe(
        switchMap(() =>interval(2000)),
        take(2),
        switchMap(() => of({res:200})),
        switchMap(() => of({res:201, title:'New Title'}))
      );
*/
    // return of({response:201, data:'New Title'}).pipe(delay(4000));
/*
    return this.http.get('assets/sample_data/rdata.json').pipe(
      map( res => res['data']),
      delay(2000)
    );
*/
    return this.http.post( this.url, toFormData(data)).pipe(
      map( (res) => {
        if( res['response'] === 201) {
          // console.log('rdata', res);
          return res['data'];
        } else {
          return res
        }
      }),
      take(1)
    )
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
