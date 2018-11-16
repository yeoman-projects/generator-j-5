import { NgModule } from '@angular/core';

import { J5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [J5SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [J5SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class J5SharedCommonModule {}
