import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {ToastrModule} from 'ngx-toastr';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ErrorHandler } from '@angular/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
import { RouterModule } from '@angular/router';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import { filter, map } from 'rxjs/operators';import { DashboardComponent } from './dashboard/dashboard.component';
import {NgDynamicBreadcrumbModule} from "ng-dynamic-breadcrumb";
import { HinjewadiComponent } from './hinjewadi/hinjewadi.component';
import {BreadcrumbModule} from 'angular-crumbs'
import { CityComponent } from './city/city.component';
import { PuneComponent } from './pune/pune.component';
import { OfficeComponent } from './office/office.component';
import { BuildingComponent } from './building/building.component';
import { RigvedaComponent } from './rigveda/rigveda.component';
import { RigvedafloorComponent } from './rigvedafloor/rigvedafloor.component';
import {MatPaginatorModule} from '@angular/material/paginator'
import {NgxPaginationModule} from 'ngx-pagination'
import {MatTableModule} from '@angular/material/table'



 
@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    LoginComponent,
    DashboardComponent,
    HinjewadiComponent,
    CityComponent,
    PuneComponent,
    OfficeComponent,
    BuildingComponent,
    RigvedaComponent,
    RigvedafloorComponent
    
  ],
  providers: [{
    provide: ErrorHandler
  }],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    SimpleModalModule.forRoot({container: "modal-container"}),
    MatProgressSpinnerModule,
    NgDynamicBreadcrumbModule,
    BreadcrumbModule,
    MatPaginatorModule,
    NgxPaginationModule,
    MatTableModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
