import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AddEmployeeComponent } from './forms/employee/add/add-employee.component';
import { TestEditorsComponent } from './forms/test/test-editors/test-editors.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DynamicPageModule } from './shared/dynamicForms/dynamic-page.module';
import { MessageHandler } from './shared/dynamicForms/services/message-handler.service';
import { AddEmployeeMockComponent } from './forms/employee/add-employee-mock/add-employee-mock.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AddEmployeeComponent,
    TestEditorsComponent,
    AddEmployeeMockComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMyDatePickerModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'employee/add', component: AddEmployeeMockComponent },
        { path: 'test/editors', component: TestEditorsComponent }
      ],
      { relativeLinkResolution: 'legacy' }),
    DynamicPageModule,
    ToastrModule.forRoot({
      enableHtml: true
    }),
    // List of Icons: https://fontawesome.com/icons?d=gallery&p=7&s=brands,regular,solid&m=free
    FontAwesomeModule
  ],
  providers: [MessageHandler],
  bootstrap: [AppComponent]
})
export class AppModule { }
