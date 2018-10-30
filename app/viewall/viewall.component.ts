import {Component} from '@angular/core';
import { WrkCollectionsService } from "../services/wrkcollections.service";
import { Workoutcollection } from "../models/workoutcollection";

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-viewall',
    templateUrl: './app/viewall/viewall.html',
	providers: [WrkCollectionsService]
})
export class ViewAllComponent {

	workoutcollection: Workoutcollection[];
    constructor(private wrkCollectionsService: WrkCollectionsService){     			 
    };
	deleteWrkColection(value){
		console.log(value);
		
	}
	ngOnInit() : void {
     this.wrkCollectionsService.getWorkoutcollections()
      .subscribe(workoutcollection => this.workoutcollection = workoutcollection);
	 
   }
};