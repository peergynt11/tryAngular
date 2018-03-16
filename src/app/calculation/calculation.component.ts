import { Component, OnInit } from '@angular/core';
import { CalculationService } from './calculation.service';
import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IDropdown, IValue } from '../shared/dropdown';
import { FormGroup, FormControl,  FormBuilder, FormArray, Validators, AbstractControl, ValidatorFn, MinLengthValidator } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent implements OnInit {

  selectBoxes=[1,2,3];
  calculationForm: FormGroup;

  bundles : IDropdown[];
  storages: IDropdown[];
  backup  : IDropdown[];
  
  price_per_year      : Observable<IValue[]>       
	price_storage_per_gb: Observable<IValue[]>
	price_backup_per_gb : Observable<IValue[]> 
	price_core_per_hour : Observable<IValue[]> 
  
  errorMessage: string;

  constructor(private _calculationService: CalculationService, private _fb: FormBuilder){ 
  }

  ngOnInit() {

    this.calculationForm = this._fb.group({
      bundle:'',
      storage:'',
      user:'',
      result:'',
      backup:''
    })

    this.initSelectBoxes();

    //subscribe nicht immer notwendig !! geht auch mit async-pipe:
    this.price_per_year = this._calculationService.getSingleValue(4);
    this.price_storage_per_gb = this._calculationService.getSingleValue(5);
    this.price_backup_per_gb = this._calculationService.getSingleValue(6);
    this.price_core_per_hour = this._calculationService.getSingleValue(7);

    this.calculationForm.get('bundle').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('user').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('storage').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('bundle').valueChanges.subscribe(value => this.calculate(value));
    //    this.calculationForm.valueChanges.subscribe(value => this.calculate(value));
  }

  private initSelectBoxes(): void {
    this.selectBoxes.forEach(id => {
      this._calculationService.getDropdownValues(id)
      .subscribe (
        data  => 
        {
          switch (id) {
              case 1: 
                this.bundles = data                
                break;
              case 2: 
                this.storages = data                        
                break;
              case 3: 
                this.backup = data                        
                break;
          }
        },                        
        //            data  => id==1 ? this.bundles = data : this.storages=data,
        error => this.errorMessage=<any>error
//        () => console.log('complete')
      ); 
    
    })
  }

  onSubmit(): void {

  }

  calculate(value) {
    console.log('vvv')
    let $calculate = Math.random() * 100;
    this.calculationForm.patchValue({
      result: $calculate
    })
  }
}
