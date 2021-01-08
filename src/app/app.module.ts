import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './sidebar/header/header.component';
import { MenuComponent } from './sidebar/menu/menu.component';
import { SidebarCardComponent } from './sidebar/sidebar-card/sidebar-card.component';
import { DepartmentsComponent } from './content/departments/departments.component';
import { RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './content/departments/add-department/add-department.component';
import { ContentHeaderComponent } from './content/content-header/content-header.component';
import { ViewDepartmentComponent } from './content/departments/view-department/view-department.component';
import { EditDepartmentComponent } from './content/departments/edit-department/edit-department.component';

const appRoutes = [
  {path:'listDepartments',component:DepartmentsComponent},
  {path:'editDepartments', component: EditDepartmentComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    MenuComponent,
    SidebarCardComponent,
    DepartmentsComponent,
    AddDepartmentComponent,
    ContentHeaderComponent,
    ViewDepartmentComponent,
    EditDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
