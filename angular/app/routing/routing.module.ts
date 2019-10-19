import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { from } from 'rxjs';
import { PaymentsPageComponent } from '../pages/payments-page/payments-page.component';
import { ImportPageComponent } from '../pages/import-page/import-page.component';

const routes: Routes = [
    { path: 'home', component: ImportPageComponent },
    { path: 'imports', component: ImportPageComponent },
    { path: 'payments', component: PaymentsPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
