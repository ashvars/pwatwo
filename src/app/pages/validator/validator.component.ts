import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.scss']
})
export class ValidatorComponent implements OnInit {

  selectedEntity: string = '';
  itemFlag: boolean;

  elements: any = [
    { gstin: "23GSPMP0501G0ZA", status: "Success", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "New", ts: '' },
    { gstin: "23GSPMP0501G0ZA", status: "Saved", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Failed", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Success", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Success", ts: '13-01-2020' },
    { gstin: "23GSPMP0501G0ZA", status: "Failed", ts: '13-01-2020' },
  ];

  headElements = ['GSTIN', 'Status', 'Timestamp', 'Action'];

  constructor() { }

  ngOnInit() {
  }
}
