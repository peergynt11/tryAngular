import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  name: string = "Bernd";

  validationMessages = {
    'backupSizeToGreat': 'Wrong size for backup (greater than storage in GB)' 
  };

  url = {
    singleDropdownUrl: 'http://gecot.local:1104/calculation-getsingle/',
    singleValueUrl   : 'http://gecot.local:1104/calculation-getsingle-value/'
  }

}
