import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { DataTablesModule } from 'angular-datatables';


// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { UserProfileComponent } from './iifm/user-profile/user-profile.component';
import { UserAddComponent } from './iifm/user-profile/user-add/user-add.component';
import { MisSidebarComponent } from './layouts/mis-sidebar/mis-sidebar.component';
import { MisHeaderComponent } from './layouts/mis-header/mis-header.component';
import { MisFooterComponent } from './layouts/mis-footer/mis-footer.component';
import { MisRightSidebarComponent } from './layouts/mis-right-sidebar/mis-right-sidebar.component';
import { AttendanceIndexComponent } from './iifm/attendance/attendance-index/attendance-index.component';
import { AttendanceAddComponent } from './iifm/attendance/attendance-add/attendance-add.component';
import { AttendanceViewComponent } from './iifm/attendance/attendance-view/attendance-view.component';
import { AttendanceEditComponent } from './iifm/attendance/attendance-edit/attendance-edit.component';
import { OnDutyIndexComponent } from './iifm/on-duty/on-duty-index/on-duty-index.component';
import { OnDutyAddComponent } from './iifm/on-duty/on-duty-add/on-duty-add.component';
import { OnDutyEditComponent } from './iifm/on-duty/on-duty-edit/on-duty-edit.component';
import { OnDutyViewComponent } from './iifm/on-duty/on-duty-view/on-duty-view.component';
import { LeaveIndexComponent } from './iifm/leave/leave-index/leave-index.component';
import { LeaveAddComponent } from './iifm/leave/leave-add/leave-add.component';
import { LeaveEditComponent } from './iifm/leave/leave-edit/leave-edit.component';
import { LeaveViewComponent } from './iifm/leave/leave-view/leave-view.component';
import { ConveyanceIndexComponent } from './iifm/conveyance/conveyance-index/conveyance-index.component';
import { ConveyanceAddComponent } from './iifm/conveyance/conveyance-add/conveyance-add.component';
import { ConveyanceEditComponent } from './iifm/conveyance/conveyance-edit/conveyance-edit.component';
import { ConveyanceViewComponent } from './iifm/conveyance/conveyance-view/conveyance-view.component';
import { ReimbursementIndexComponent } from './iifm/reimbursement/reimbursement-index/reimbursement-index.component';
import { ReimbursementAddComponent } from './iifm/reimbursement/reimbursement-add/reimbursement-add.component';
import { ReimbursementEditComponent } from './iifm/reimbursement/reimbursement-edit/reimbursement-edit.component';
import { ReimbursementViewComponent } from './iifm/reimbursement/reimbursement-view/reimbursement-view.component';
import { EofIndexComponent } from './iifm/hall-of-fame/eof-index/eof-index.component';
import { EofAddComponent } from './iifm/hall-of-fame/eof-add/eof-add.component';
import { EofEditComponent } from './iifm/hall-of-fame/eof-edit/eof-edit.component';
import { EofViewComponent } from './iifm/hall-of-fame/eof-view/eof-view.component';
import { PhotoIndexComponent } from './iifm/photo-album/photo-index/photo-index.component';
import { PhotoEditComponent } from './iifm/photo-album/photo-edit/photo-edit.component';
import { PhotoViewComponent } from './iifm/photo-album/photo-view/photo-view.component';
import { PhotoAddComponent } from './iifm/photo-album/photo-add/photo-add.component';
import { PasswordIndexComponent } from './iifm/change-password/password-index/password-index.component';


@NgModule({
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    UserProfileComponent,
    UserAddComponent,
    MisSidebarComponent,
    MisHeaderComponent,
    MisFooterComponent,
    MisRightSidebarComponent,
    AttendanceIndexComponent,
    AttendanceAddComponent,
    AttendanceViewComponent,
    AttendanceEditComponent,
    OnDutyIndexComponent,
    OnDutyAddComponent,
    OnDutyEditComponent,
    OnDutyViewComponent,
    LeaveIndexComponent,
    LeaveAddComponent,
    LeaveEditComponent,
    LeaveViewComponent,
    ConveyanceIndexComponent,
    ConveyanceAddComponent,
    ConveyanceEditComponent,
    ConveyanceViewComponent,
    ReimbursementIndexComponent,
    ReimbursementAddComponent,
    ReimbursementEditComponent,
    ReimbursementViewComponent,
    EofIndexComponent,
    EofAddComponent,
    EofEditComponent,
    EofViewComponent,
    PhotoIndexComponent,
    PhotoEditComponent,
    PhotoViewComponent,
    PhotoAddComponent,
    PasswordIndexComponent
   
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
