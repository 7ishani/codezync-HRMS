import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  toggled = false;

  constructor(){}

 menus = [
   {
      title: 'Human Resource',
      icon: 'fas fa-users',
      active: false,
      type: 'dropdown',
      submenus: [
        {
          title: 'Company profile',
          path:'/updateCompanyProfile'
        },
        {
          title: 'Employees',
          path: '/listEmployees'
        },
      ]
   },

  //  {
  //   title: 'Payroll',
  //   icon: 'fas fa-users',
  //   active: false,
  //   type: 'dropdown',
  //   submenus: [
  //     {
  //       title: 'Employees',
  //         path: '/listEmployees'
  //     }
  //   ]
  //  }
 ];

 subs = [
  {
     title: 'Settings',
     icon: 'fas fa-users',
     activeSub: false,
     type: 'dropdownSub',
     subs: [
        {
         title: 'Departments',
         path: '/listDepartments'
       },
       {
         title: 'Employee Category',
         path: '/listEmployeeCategory'
       },
       {
         title: 'Designations',
         path: '/listDesignation'
       },
       {
         title: 'Compensation Types',
         path: '/listCompensatation'
       },
       {
         title: 'Salary Types',
         path: '/listSalaryTypes'
       }
     ]
  },
];


  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  getSubMenuList(){
    return this.subs;
  }
}

