import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ModalModule} from 'ngx-bootstrap/modal';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardComponent } from './component/dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardDetailResolver, DashBoardResolver } from './service/resolver';
import { DashboardDetailComponent } from './component/dashboard-detail.component';
import { DashboardListComponent } from './component/dashboard-list.component';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, 
      {
         path: 'dashboard',
         component: DashboardComponent,
         data: { shouldReuse: true},
         resolve: {dashboards: DashBoardResolver}
      },
      {
        path: 'dashboard/:id',
        component: DashboardDetailComponent,
        resolve: {dashboard: DashBoardDetailResolver}
      }
    ]
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardDetailComponent,
    DashboardListComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [DashBoardResolver, DashBoardDetailResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
