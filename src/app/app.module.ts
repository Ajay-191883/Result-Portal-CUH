import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LoginpageComponent } from './pages/loginpage/loginpage.component';
import { UsersComponent } from './pages/landingPage/users.component';
import { TermendComponent } from './features/termend/termend.component';
import { DatauploadComponent } from './features/dataupload/dataupload.component';
import { InternalComponent } from './features/internal/internal.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ResultComponent } from './features/result/result.component';
import { MarksheetComponent } from './features/marksheet/marksheet.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DashboardComponent,
    SidebarComponent,
    LoginpageComponent,
    UsersComponent,
    TermendComponent,
    DatauploadComponent,
    InternalComponent,
    DataTableComponent,
    LoaderComponent,
    HeaderComponent,
    NavbarComponent,
    ResultComponent,
    MarksheetComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
