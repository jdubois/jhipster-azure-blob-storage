import { NgModule, LOCALE_ID } from '@angular/core';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import locale from '@angular/common/locales/en';

import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateMomentAdapter } from 'app/shared/util/datepicker-adapter';

import { fontAwesomeIcons } from './icons/font-awesome-icons';

@NgModule({
  imports: [HttpClientModule],
  exports: [],
  declarations: [],
  providers: [
    Title,
    {
      provide: LOCALE_ID,
      useValue: 'en'
    },
    { provide: NgbDateAdapter, useClass: NgbDateMomentAdapter },
    DatePipe
  ]
})
export class JhipsterCoreModule {
  constructor(iconLibrary: FaIconLibrary) {
    registerLocaleData(locale);
    iconLibrary.addIconPacks(fas);
    iconLibrary.addIcons(...fontAwesomeIcons);
  }
}
