import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  constructor(private http: HttpClient) { }

  getDepartments(){
    console.log("departments");
  }
}
