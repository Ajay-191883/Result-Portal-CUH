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
import { TermendComponent } from './features/r-d/components/termend/termend.component';
import { DatauploadComponent } from './features/r-d/components/dataupload/dataupload.component';
import { InternalComponent } from './features/r-d/components/internal/internal.component';
import { DataTableComponent } from './shared/components/data-table/data-table.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { RDComponent } from './features/r-d/r-d.component';
import { FeaturesComponent } from './features/features.component';
import { DashboardComponent } from './features/r-d/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturesComponent,
    DashboardComponent,
    RDComponent,
    SidebarComponent,
    LoginpageComponent,
    UsersComponent,
    TermendComponent,
    DatauploadComponent,
    InternalComponent,
    DataTableComponent,
    LoaderComponent,
    HeaderComponent,
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
