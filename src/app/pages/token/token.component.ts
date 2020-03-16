import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {

  otpFlag: boolean = false;
  elements: any = [
    { gstin: "23GSPMP0501G0ZA", status: "Active", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Not Available", ts: '-' },
    { gstin: "23GSPMP0501G0ZA", status: "Inactive", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Active", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Active", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Inactive", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Inactive", ts: '13-01-2020' },
  ];

  headElements = ['GSTIN', 'Last Activated', 'Status', 'Action'];

  constructor() { }

  ngOnInit() {
  }

}
