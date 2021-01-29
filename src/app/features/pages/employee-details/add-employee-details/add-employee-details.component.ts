import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Employee } from '../model/employee';
@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {
  @ViewChild('formTabs') formTabs: TabsetComponent;

  employeeForm: FormGroup;
  userSubmitted: boolean;
  employee: Employee

  public imagePath;
  imgURL: any;
  public message: string;

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
      otherNames: [null, Validators.nullValidator],
      emailID: [null, Validators.required],
      nic: [null, Validators.required],
      nationality: [null, Validators.required],
      religion: [null, Validators.required],
      passportNo: [null, Validators.nullValidator],
      licenseNo: [null, Validators.nullValidator],
      bloodGroup: [null, Validators.nullValidator],
      policeStation: [null, Validators.required],
      district: [null, Validators.required],
      profileImg: [null, Validators.required],
      EPFNo: [null, Validators.required],
      empGrade: [null, Validators.required],
      empType: [null, Validators.required],
      startDate: [null, Validators.required],
      endDate: [null, Validators.required],
      occuClassi: [null, Validators.required],
      advance: [null, Validators.required]

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

  get otherNames(){
    return this.employeeForm.get('otherNames') as FormControl;
  }

  get emailID(){
    return this.employeeForm.get('emailID') as FormControl;
  }

  get nic(){
    return this.employeeForm.get('nic') as FormControl;
  }

  get nationality(){
    return this.employeeForm.get('nationality') as FormControl;
  }

  get religion(){
    return this.employeeForm.get('religion') as FormControl;
  }

  get passportNo(){
    return this.employeeForm.get('passportNo') as FormControl;
  }

  get licenseNo(){
    return this.employeeForm.get('licenseNo') as FormControl;
  }

  get bloodGroup(){
    return this.employeeForm.get('bloodGroup') as FormControl;
  }

  get policeStation(){
    return this.employeeForm.get('policeStation') as FormControl;
  }

  get district(){
    return this.employeeForm.get('district') as FormControl;
  }

  get profileImg(){
    return this.employeeForm.get('profileImg') as FormControl;
  }

  get EPFNo(){
    return this.employeeForm.get('EPFNo') as FormControl;
  }

  get empGrade(){
    return this.employeeForm.get('empGrade') as FormControl;
  }

  get empType(){
    return this.employeeForm.get('empType') as FormControl;
  }

  get startDate(){
    return this.employeeForm.get('startDate') as FormControl;
  }

  get endDate(){
    return this.employeeForm.get('endDate') as FormControl;
  }

  get occuClassi(){
    return this.employeeForm.get('occuClassi') as FormControl;
  }

  get advance(){
    return this.employeeForm.get('advance') as FormControl;
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

  preview(files){
    if(files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
      this.imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
     }
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
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
      joinedOn: this.joinedOn.value,
      otherNames: this.otherNames.value,
      emailID: this.emailID.value,
      nic: this.nic.value,
      nationality: this.nationality.value,
      religion: this.religion.value,
      passportNo: this.passportNo.value,
      licenseNo: this.licenseNo.value,
      bloodGroup: this.bloodGroup.value,
      policeStation: this.policeStation.value,
      district: this.district.value,
      profileImg: this.profileImg.value,
      EPFNo: this.EPFNo.value,
      empGrade: this.empGrade.value,
      empType: this.empType.value,
      startDate: this.startDate.value,
      endDate: this.endDate.value,
      occuClassi: this.occuClassi.value,
      advance: this.advance.value
    }
  }

}
