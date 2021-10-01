import { Component, OnInit } from '@angular/core';


interface Alert {
  type: string;
  message: string;
}

const ALERTS: Alert[] = [{
    type: 'success',
    message: 'This is an success alert',
  }, {
    type: 'info',
    message: 'This is an info alert',
  }, {
    type: 'warning',
    message: 'This is a warning alert',
  }, {
    type: 'danger',
    message: 'This is a danger alert',
  }
];

@Component({
  selector: 'app-boot-sample',
  templateUrl: './boot-sample.component.html',
  styleUrls: ['./boot-sample.component.css']
})
export class BootSampleComponent implements OnInit {

  ngOnInit(): void {
  }

  alerts: Alert[];

  constructor() {
    this.reset();
  }

  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

}
