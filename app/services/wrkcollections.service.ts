import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';

import { Workoutcollection } from "../models/workoutcollection";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';
 
@Injectable()
export class WrkCollectionsService {
   constructor(private _http: Http) {
   }
  workoutcollection;
   getWorkoutcollections(): Observable<Workoutcollection[]> {
	  
		 return this._http.get("http://172.18.2.182:9081/workouttracker/workoutcollection/get")
      .map((response: Response) => <Workoutcollection[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
		
   }
   deleteWorkoutCategory(id:String): Observable<Workoutcollection> {
		  let headers = new Headers({ 'Content-Type': 'application/json' });
   let options = new RequestOptions({ headers: headers });
    return this._http.post("http://localhost:9081/workouttracker/category/delete"+id,options).map(this.extractData).do(data => console.log(JSON.stringify(data)));
		
		
   }
    extractData(res: Response) {
  let body = res.json();
  return body || {};
}
}