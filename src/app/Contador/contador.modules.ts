import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.componentes';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule {
}