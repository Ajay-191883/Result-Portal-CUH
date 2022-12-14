import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { DatauploadComponent } from './features/dataupload/dataupload.component';
import { InternalComponent } from './features/internal/internal.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TermendComponent } from './features/termend/termend.component';
import { UsersComponent } from './pages/landingPage/users.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { CanDeactivateGuard } from './shared/services/can-deactivate-guard.service';
import { MarksheetComponent } from './features/marksheet/marksheet.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    path: 'login/:userRole',
    component: LoginpageComponent,
  },
  {
    path: 'features/:userRole',
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'uploadData',
        component: DatauploadComponent,
      },
      {
        path: 'endTermData',
        component: TermendComponent,
      },
      {
        path: 'internalData',
        component: InternalComponent,
      },
      {
        path: 'result/marksheet',
        component: MarksheetComponent,
      },
    ],
    canActivate: [AuthGuardService],
    // canDeactivate: [CanDeactivateGuard],
  },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'dataTable', component: DataTableComponent },
  { path: 'loader', component: LoaderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
