import { Component, OnInit } from '@angular/core';
import { DateUtilService } from '../date-util.service';

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements OnInit {

  constructor(private dateUtilService: DateUtilService ) { }


  output: any;

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onChange(value: any) {
    this.output = this.dateUtilService.getDiffToNow(value);
  }
}
