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
        {
          title: 'Settings',
          path: '/settingsPage',
          subs:[
            {
              titleSub: 'Departments',
              pathSub: '/listDepartments'
            },
            {
              titleSub: 'Employee Category',
              pathSub: '/listEmployeeCategory'
            },
            {
              titleSub: 'Departments',
              pathSub: '/listDesignation'
            },
            {
              titleSub: 'Compensation Types',
              pathSub: '/listCompensatation'
            },
            {
              titleSub: 'Salary Types',
              pathSub:'/listSalaryTypes'
            },

          ]
        }
        // {
        //   title: 'Departments',
        //   path: '/listDepartments'
        // },
        // {
        //   title: 'Employee Category',
        //   path: '/listEmployeeCategory'
        // },
        // {
        //   title: 'Designations',
        //   path: '/listDesignation'
        // },
        // {
        //   title: 'Compensation Types',
        //   path: '/listCompensatation'
        // },
        // {
        //   title: 'Salary Types',
        //   path: '/listSalaryTypes'
        // }
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
}

