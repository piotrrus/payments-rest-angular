import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationComponent } from './navigation/navigation.component';
import { MaterialModule } from '../../modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        MaterialModule,
        FlexLayoutModule,
        RouterModule,
        MatIconModule
    ],
    exports: [
        NavigationComponent
    ],
    declarations: [NavigationComponent]
})
export class NavigationModule {
}
