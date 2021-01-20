import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../model/employee';
@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {

  employeeForm: FormGroup;
  userSubmitted: boolean;
  employee: Employee

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createEmployeeForm();
  }

  createEmployeeForm(){
    this.employeeForm = this.fb.group({
      employeeID: [null, Validators.required],
      initials: [null, Validators.required],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      title: [null, Validators.required],
      gender: [null, Validators.required],
      dateOfBirth: [null, Validators.required],
      employeeCategory: [null, Validators.required],
      leaveAct: [null, Validators.required],
      designation: [null, Validators.required],
      department: [null, Validators.required],
      salaryType: [null, Validators.required],
      amount: [null, Validators.required],
      joinedOn: [null, Validators.required],
    })
  }

  //Getter methods to form controls

  get employeeID(){
    return this.employeeForm.get('employeeID') as FormControl;
  }

  get initials(){
    return this.employeeForm.get('initials') as FormControl;
  }

  get firstName(){
    return this.employeeForm.get('firstName') as FormControl;
  }

  get lastName(){
    return this.employeeForm.get('lastName') as FormControl;
  }

  get title(){
    return this.employeeForm.get('title') as FormControl;
  }

  get gender(){
    return this.employeeForm.get('gender') as FormControl;
  }

  get dateOfBirth(){
    return this.employeeForm.get('dateOfBirth') as FormControl;
  }

  get employeeCategory(){
    return this.employeeForm.get('employeeCategory') as FormControl;
  }

  get leaveAct(){
    return this.employeeForm.get('leaveAct') as FormControl;
  }

  get designation(){
    return this.employeeForm.get('designation') as FormControl;
  }

  get department(){
    return this.employeeForm.get('department') as FormControl;
  }

  get salaryType(){
    return this.employeeForm.get('salaryType') as FormControl;
  }

  get amount(){
    return this.employeeForm.get('amount') as FormControl;
  }

  get joinedOn(){
    return this.employeeForm.get('joinedOn') as FormControl;
  }



  onSubmit(){
    console.log(this.employeeForm.value);

    if(this.employeeForm.valid){
      console.log(this.employeeData());
      this.employeeForm.reset();
      this.userSubmitted = false;
    }

    else{
      console.log('not valid');
    }
  }

  employeeData(): Employee{
    return this.employee = {
      employeeID: this.employeeID.value,
      initials: this.initials.value,
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      title: this.title.value,
      gender: this.gender.value,
      dateOfBirth: this.dateOfBirth.value,
      employeeCategory: this.employeeCategory.value,
      leaveAct: this.leaveAct.value,
      designation: this.designation.value,
      department: this.department.value,
      salaryType: this.salaryType.value,
      amount: this.amount.value,
      joinedOn: this.joinedOn.value
    }
  }

}
