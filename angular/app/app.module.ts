import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';

import { from } from 'rxjs';


import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';


import { NumberOnlyDirective } from './directives/numbers-only.directive';
import { BaseComponent } from './components/base/base.component';

import { RestApiService } from './services/api-service';
import { RoutingModule } from './routing/routing.module';
import { ErrorMsgService } from './services/error-msg.service';
import { ImportPageModule } from './pages/import-page/import-page.module';
import { PaymentsPageModule } from './pages/payments-page/payments-page.module';
import { NavigationModule } from './ui/navigation/navigation.module';
// import { MaterialFileInputModule } from 'ngx-material-file-input';


@NgModule({
  declarations: [
    AppComponent,
    NumberOnlyDirective,
    BaseComponent
  ],
  entryComponents: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    MatSidenavModule,
    NavigationModule,
    ToastrModule.forRoot(),

    ImportPageModule,
    PaymentsPageModule

  ],
  providers: [
    RestApiService, ErrorMsgService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
