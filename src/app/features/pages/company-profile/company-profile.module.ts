import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompanyProfileComponent } from './company-profile.component';
import { UpdateCompanyProfileComponent } from './update-company-profile/update-company-profile.component';

const appRoutes = [
  {path: 'updateCompanyProfile', component: UpdateCompanyProfileComponent},
];

@NgModule({
  declarations: [CompanyProfileComponent, UpdateCompanyProfileComponent],

  imports:[
    CommonModule,
    RouterModule.forChild(appRoutes)
  ]
})

export class CompanyProfileModule {}
