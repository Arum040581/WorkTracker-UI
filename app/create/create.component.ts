import {Component} from '@angular/core';
import { CreateService } from "../services/create.service";
import { WorkoutCategory } from "../models/workoutcategory";
import { Workoutcollection } from "../models/workoutcollection";
import { WorkoutCollectionVO } from "../models/workoutcollectionvo";

import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    selector: 'app-create',
    templateUrl: './app/create/create.html',
	providers: [CreateService]
})
export class CreateComponent {
	selectedValue = null;
	workoutCollectionVO;
	categoryModel = new WorkoutCategory(0,"");
	createWrkModel = new Workoutcollection(0,"","",0,this.categoryModel);
    listCategory: WorkoutCategory[];
    constructor(private createService: CreateService){
       
    };

	createWrkCol(form)
	{
		console.log(form.value);
		console.log("sdfs");
		console.log(form);
		console.log(form.value.categoryId);
		this.workoutCollectionVO = new WorkoutCollectionVO(form.value.workoutTitle,form.value.workoutNote,form.value.caloriesBurnPerMin,form.value.categoryId);
		this.createService.addWorkoutCollection(this.workoutCollectionVO).subscribe(data => console.log(JSON.stringify(data)));
		form.reset();
		alert("Added Successfully");
	 
	}
	ngOnInit() : void {
     this.createService.getWorkoutCategorys()
      .subscribe(workoutcategory => this.listCategory = workoutcategory);
	 
   }
};