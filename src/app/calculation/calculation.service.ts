import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';  
import { IDropdown, IValue } from '../shared/dropdown';


@Injectable()
export class CalculationService {

  private singleDropdownUrl      = 'http://gecot.local:1104/calculation-getsingle/';
  private singleValueUrl         = 'http://gecot.local:1104/calculation-getsingle-value/';

  constructor(private _http: HttpClient) { }

  getDropdownValues(id: number): Observable<IDropdown[]> {
    return this._http.get<IDropdown[]>(this.singleDropdownUrl+id)
      .catch(this.handleError)
  }

  getSingleValue(id: number): Observable<IValue[]> {
    return this._http.get<IDropdown[]>(this.singleValueUrl+id)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError)
  }  

  handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
