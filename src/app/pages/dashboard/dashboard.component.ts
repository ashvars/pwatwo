import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  elements: any = [
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
    {gstin: '23GSPMP0501G0ZA', os: '80', itc: '2.4', liability: '15.1', gstr1: 'Filed', gstr3b: 'Not Filed'},
  ];

  headElements = ['GSTIN', 'Outward Supplies (in Lakhs)', 'Total ITC (in Lakhs)', 'Net Liability (in Lakhs)', 'GSTR-1','GSTR-3B'];

  constructor() { }

  ngOnInit() {
  }

  public chartType: string = 'line';

  chart1Datasets: Array<any> = [ { data: [130, 110, 115, 95, 102, 90, 101, 110, 106], label: 'Net Liability (in Crores)' },
  { data: [75, 50, 53, 32, 45, 30, 55, 61, 60], label: 'Input Tax Credit (in Crores)' }];

  chart2Datasets: Array<any> = [ { data: [89, 105, 105, 103, 100, 95, 98, 108, 102], label: 'GSTR-1 Filed' },
  { data: [45, 70, 79, 74, 80, 71, 68, 78, 75], label: 'GSTR-3B Filed' }];

  public chartLabels: Array<any> = ["Dec '19", "Nov '19", "Oct '19", "Sep '19", "Aug '19", "Jul '19", "Jun '19", "May '19", "Apr '19"];

  chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(51, 101, 153, 0.3)',
      borderColor: "rgb(51, 101, 153)",
      borderWidth: 0
    }, {
      backgroundColor: 'rgba(240, 76, 62,0.3)',
      borderColor: "rgb(240, 76, 62)",
      borderWidth: 0
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}

interface DropdownOption {
  value: any;
  label: string;
}