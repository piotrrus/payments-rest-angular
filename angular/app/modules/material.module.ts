import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatCard, MatProgressSpinnerModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { MatSortModule } from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';

import { MatTableModule } from '@angular/material';

import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material';
// import { MatPaginatorIntlPl } from '../components/table/matPaginatorIntlPlClass';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material';
import { NativeDateModule } from '@angular/material';

import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { from } from 'rxjs';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        CommonModule,
        MatTabsModule,
        MatTableModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatStepperModule,
        MatDividerModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule, MatToolbarModule,
        MatDatepickerModule, NativeDateModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        FlexLayoutModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatTabsModule,
        MatDialogModule,
        MatCardModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatSelectModule,
        MatCheckboxModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatExpansionModule,
        MatStepperModule,
        MatDividerModule,
        MatListModule,
        MatMenuModule,
        MatSidenavModule, MatToolbarModule,
        MatDatepickerModule, NativeDateModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        FlexLayoutModule
    ],
   // declarations: [MatSpinner],
    // useClass: MatPaginatorIntlPl
    providers: [{ provide: MatPaginatorIntl }],
})
export class MaterialModule {
}
