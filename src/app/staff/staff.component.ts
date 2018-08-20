import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  myStaff:Object = ['Iron Man','Vision','Hulk','Thor','Black Widow','Captain America'];

  constructor() { }

  ngOnInit() {
  }

}
