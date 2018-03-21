import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';  
import { IDropdown, IValue } from '../shared/dropdown';
import { ConfigService } from '../shared/config.service';


@Injectable()
export class CalculationService {

  constructor(private _http: HttpClient, private _config: ConfigService) { }

  getDropdownValues(id: number): Observable<IDropdown[]> {
    return this._http.get<IDropdown[]>(this._config.url.singleDropdownUrl+id)
      .catch(this.handleError)
  }

  getSingleValue(id: number): Observable<IValue[]> {
    return this._http.get<IDropdown[]>(this._config.url.singleValueUrl+id)
      .do(data => console.log('All ' + JSON.stringify(data)))
      .catch(this.handleError)
  }  

  handleError(err: HttpErrorResponse){
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
