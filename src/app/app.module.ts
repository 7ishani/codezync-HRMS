import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';

import { SiderbarComponent } from './shared/layout/siderbar/siderbar.component';
import { LogoComponent } from './shared/layout/logo/logo.component';
import { ShortcutModelComponent } from './shared/layout/shortcut-model/shortcut-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/navigation/navigation/navigation.component';
import { NavComponent } from './shared/navigation/nav/nav.component';
import { NavFilterComponent } from './shared/navigation/nav-filter/nav-filter.component';
import { NavFilterMsgComponent } from './shared/navigation/nav-filter-msg/nav-filter-msg.component';
import { NavFooterComponent } from './shared/navigation/nav-footer/nav-footer.component';
import { NavInfoCardComponent } from './shared/navigation/nav-info-card/nav-info-card.component';
import { NavItemComponent } from './shared/navigation/nav-item/nav-item.component';
import { PageHeaderComponent } from './shared/layout/page-header/page-header.component';
import { PageBreadcrumbComponent } from './shared/layout/page-breadcrumb/page-breadcrumb.component';
import { DepartmentComponent } from './features/pages/department/department.component';
import { AddDepartmentComponent } from './features/pages/department/add-department/add-department.component';
import { EmployeeCategoryComponent } from './features/pages/employee-category/employee-category.component';
import { ViewEmployeeCategoryComponent } from './features/pages/employee-category/view-employee-category/view-employee-category.component';
import { AddEmployeeCategoryComponent } from './features/pages/employee-category/add-employee-category/add-employee-category.component';
import { ViewDepartmentComponent } from './features/pages/department/view-department/view-department.component';
import { SettingsShortcutComponent } from './shared/layout/settings-shortcut/settings-shortcut.component';
import { Store,StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ModalModule } from 'ngx-bootstrap/modal';
import { reducers, metaReducers, effects } from './store';
import { DesignationComponent } from './features/pages/designation/designation.component';
import { AddDesignationComponent } from './features/pages/designation/add-designation/add-designation.component';
import { ViewDesignationComponent } from './features/pages/designation/view-designation/view-designation.component';
import { CompensationComponent } from './features/pages/compensation/compensation.component';
import { ViewCompensationComponent } from './features/pages/compensation/view-compensation/view-compensation.component';
import { AddCompensationComponent } from './features/pages/compensation/add-compensation/add-compensation.component';
import { CompanyProfileComponent } from './features/pages/company-profile/company-profile.component';
import { UpdateCompanyProfileComponent } from './features/pages/company-profile/update-company-profile/update-company-profile.component';
import { PageFooterComponent } from './shared/layout/page-footer/page-footer.component';

const appRoutes = [
  {path:'listDepartments',component:DepartmentComponent},
  {path:'listEmployeeCategory', component: EmployeeCategoryComponent},
  {path:'listDesignation', component: DesignationComponent},
  {path:'listCompensatation',component: CompensationComponent},
  {path:'updateCompanyProfile',component: UpdateCompanyProfileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SiderbarComponent,
    LogoComponent,
    ShortcutModelComponent,
    NavigationComponent,
    NavComponent,
    NavFilterComponent,
    NavFilterMsgComponent,
    NavFooterComponent,
    NavInfoCardComponent,
    NavItemComponent,
    PageHeaderComponent,
    PageBreadcrumbComponent,
    DepartmentComponent,
    AddDepartmentComponent,
    EmployeeCategoryComponent,
    ViewEmployeeCategoryComponent,
    AddEmployeeCategoryComponent,
    ViewDepartmentComponent,
    SettingsShortcutComponent,
    DesignationComponent,
    AddDesignationComponent,
    ViewDesignationComponent,
    CompensationComponent,
    ViewCompensationComponent,
    AddCompensationComponent,
    CompanyProfileComponent,
    UpdateCompanyProfileComponent,
    PageFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false,
      },
    }),
    EffectsModule.forRoot([...effects]),
    ModalModule.forRoot()
   // Store
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
