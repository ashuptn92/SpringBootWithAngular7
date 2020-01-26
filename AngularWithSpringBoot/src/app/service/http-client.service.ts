import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: String,
	  public empName: String,
	  public designation: String,
	  public empSal: String,
	  public empEmail: String,
	  public adhaarNo: String,
  ){ }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getEmployees()
  {
    console.log("test call");
    return this.httpClient.get<Employee[]>('http://localhost:6062/employees');
  }
  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:6062/employees" + "/"+ employee.empId);
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:6062/employees", employee);
  }
}
