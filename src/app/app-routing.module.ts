import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { DatauploadComponent } from './features/r-d/components/dataupload/dataupload.component';
import { InternalComponent } from './features/r-d/components/internal/internal.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TermendComponent } from './features/r-d/components/termend/termend.component';
import { UsersComponent } from './pages/landingPage/users.component';
import { DashboardComponent } from './features/r-d/components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'login/:userRole', component: LoginpageComponent },
  {
    path: 'features',
    children: [
      {
        path: ':userRole/dashboard',
        component: DashboardComponent,
      },
      {
        path: ':userRole/uploadData',
        component: DatauploadComponent,
      },
      {
        path: ':userRole/endTermData',
        component: TermendComponent,
      },
      {
        path: ':userRole/internalData',
        component: InternalComponent,
      },
    ],
  },
  { path: 'sidebar', component: SidebarComponent },
  // { path: 'uploadData', component: DatauploadComponent },
  // { path: 'endTermData', component: TermendComponent },
  // { path: 'internalData', component: InternalComponent },
  // { path: 'dashboard', component: DashboardComponent },
  { path: 'dataTable', component: DataTableComponent },
  { path: 'loader', component: LoaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
