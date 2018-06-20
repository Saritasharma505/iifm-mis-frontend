import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { UserProfileComponent } from './iifm/user-profile/user-profile.component';
import { AttendanceIndexComponent } from './iifm/attendance/attendance-index/attendance-index.component';
import { ConveyanceIndexComponent } from './iifm/conveyance/conveyance-index/conveyance-index.component';
import { UserAddComponent } from './iifm/user-profile/user-add/user-add.component';
import { EofIndexComponent } from './iifm/hall-of-fame/eof-index/eof-index.component';
import { OnDutyIndexComponent } from './iifm/on-duty/on-duty-index/on-duty-index.component';
import { PhotoIndexComponent } from './iifm/photo-album/photo-index/photo-index.component';
import { LeaveIndexComponent } from './iifm/leave/leave-index/leave-index.component';
import { ReimbursementIndexComponent } from './iifm/reimbursement/reimbursement-index/reimbursement-index.component';
import { OnDutyAddComponent } from './iifm/on-duty/on-duty-add/on-duty-add.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    data: {
      title: 'User Management'
    }
  },
  {
    path: 'user-profile/add',
    component: UserAddComponent,
    data: {
      title: 'User Profile'
    }
  },
  {
    path: 'user/attendance',
    component: AttendanceIndexComponent,
    data: {
      title: 'Attendance Management'
    }
  },
  {
    path: 'user/conveyance',
    component: ConveyanceIndexComponent,
    data: {
      title: 'Conveyance Management'
    }
  },
  {
    path: 'user/employee-of-month',
    component: EofIndexComponent,
    data: {
      title: 'Hall of Fame Management'
    }
  },
  {
    path: 'user/on-duty-request',
    component: OnDutyIndexComponent,
    data: {
      title: 'On-Duty Management'
    }
  },
  {
    path: 'user/on-duty-request/add',
    component: OnDutyAddComponent,
    data: {
      title: 'ADD On-Duty'
    }
  },
  {
    path: 'user/photo-album',
    component: PhotoIndexComponent,
    data: {
      title: 'Photo Album Management'
    }
  },
  {
    path: 'user/leave-request',
    component: LeaveIndexComponent,
    data: {
      title: 'Leave Management'
    }
  },
  {
    path: 'user/reimbursement',
    component: ReimbursementIndexComponent,
    data: {
      title: 'Reimbursement Management'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
