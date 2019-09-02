import { NgModule } from '@angular/core';

import { JhipsterSharedLibsModule } from './shared-libs.module';
import { JhiAlertComponent } from './alert/alert.component';
import { JhiAlertErrorComponent } from './alert/alert-error.component';

@NgModule({
  imports: [JhipsterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [JhipsterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterSharedCommonModule {}
