import { NgModule } from '@angular/core';
import { JhipsterSharedCommonModule } from './shared-common.module';
import { JhiLoginModalComponent } from './login/login.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [JhipsterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective]
})
export class JhipsterSharedModule {}
