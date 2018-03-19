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
  
  price_per_year      : IValue;
	price_storage_per_gb: IValue;
	price_backup_per_gb : IValue;
	price_core_per_hour : IValue;
  
  errorMessage: string;

  constructor(private _calculationService: CalculationService, private _fb: FormBuilder){ 
  }

  ngOnInit() {

    this.calculationForm = this._fb.group({
      bundle:'10000',
      storage:'250',
      user:'1',
      result:'153.400',
      backup:'0'
    })

    this.initSelectBoxes();

    this._calculationService.getSingleValue(4).subscribe(data =>  this.price_per_year = data[0])
    this._calculationService.getSingleValue(5).subscribe(data =>  this.price_storage_per_gb = data[0])
    this._calculationService.getSingleValue(6).subscribe(data =>  this.price_backup_per_gb = data[0])
    this._calculationService.getSingleValue(7).subscribe(data =>  this.price_core_per_hour = data[0])        

    this.calculationForm.get('bundle').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('storage').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('user').valueChanges.subscribe(value => this.calculate(value));
    this.calculationForm.get('backup').valueChanges.subscribe(value => this.calculate(value));
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
    console.log(this.price_per_year.singleDesc)
    console.log(this.price_storage_per_gb.singleDesc)
    console.log(this.price_backup_per_gb.singleDesc)
    console.log(this.price_core_per_hour.singleDesc)        
  }

  calculate(value) {

    console.log(this.calculationForm)

    let $bundle = this.calculationForm.get('bundle').value
    let $user = this.calculationForm.get('user').value
    let $storage = this.calculationForm.get('storage').value
    let $backup = this.calculationForm.get('backup').value


    console.log(this.price_per_year.singleValue)
    console.log(this.price_storage_per_gb.singleValue/100)    
    console.log(this.price_backup_per_gb.singleValue/100)    
    console.log(this.price_core_per_hour.singleValue/100)    


    let $costs = ($user * this.price_per_year.singleValue) + 
    ($user*$storage*(this.price_storage_per_gb.singleValue/100)) + 
    ($user*$backup*(this.price_backup_per_gb.singleValue/100))

    let $corehours = ($bundle - $costs) / (this.price_core_per_hour.singleValue/100);

    if ($corehours <= 0) {
      this.calculationForm.patchValue({result: "Please select a larger bundle"})
    }else {
      this.calculationForm.patchValue({result: $corehours.toLocaleString()})      
    }
  }
}
