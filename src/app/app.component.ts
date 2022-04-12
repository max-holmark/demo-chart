// Angular
import { Component, OnInit } from '@angular/core';
// 3rd party
import * as moment from 'moment';
// Interfaces
import { ChartData } from './app.interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public line1: ChartData[] = [];
  public line2: ChartData[] = [];

  public ngOnInit(): void {
    this.line1 = [
      { date: moment('2022-01-01').toDate(), value: 0 },
      { date: moment('2022-12-31').toDate(), value: 120 }
    ];

    this.line2 = [
      { date: moment('2022-01-01').toDate(), value: 0 },
      { date: moment('2022-02-01').toDate(), value: 20 },
      { date: moment('2022-05-01').toDate(), value: 80 },
      { date: moment('2022-07-15').toDate(), value: 100 },
    ];
  }

}
