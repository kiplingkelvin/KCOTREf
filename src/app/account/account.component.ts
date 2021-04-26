import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  pageName:any;
  memberId:any;
  fName:any;
  lName:any;
  oNames:any;
  natId:any;
  email:any;
  dob:any;
  cellNo:any;
  messages:any;
  callLogs:any;

  constructor() {

   }

  ngOnInit(): void {
    this.fName=window.localStorage.getItem('firstName');
    this.oNames=window.localStorage.getItem('otherNames');
    this.lName=window.localStorage.getItem('lastName');
    this.email=window.localStorage.getItem('email');
    this.cellNo=window.localStorage.getItem('CellNo');
    this.dob=window.localStorage.getItem('DOB');
    this.natId=window.localStorage.getItem('natIdNo');
    console.log(this.fName);
    console.log(this.oNames);
    console.log(this.lName);
    console.log(this.email);
    console.log(this.cellNo);
    console.log(this.dob);
    console.log(this.natId);
  }
}
