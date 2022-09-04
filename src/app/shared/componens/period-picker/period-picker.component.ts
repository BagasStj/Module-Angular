import { Component, OnInit } from '@angular/core';
import { getISOWeek } from 'date-fns';
import { en_US, NzI18nService, zh_CN } from 'ng-zorro-antd/i18n';
import * as moment from 'moment';


@Component({
  selector: 'inap-period-picker',
  templateUrl: './period-picker.component.html',
  styleUrls: ['./period-picker.component.scss']
})
export class PeriodPickerComponent implements OnInit {
  date = null;
  hoverDate = new Date();
  constructor(private i18n: NzI18nService) { }

  ngOnInit(): void {
    this.changeLanguage();
  }

  getWeek(result: Date): void {
    console.log('week: ', getISOWeek(result));
  }

  onMouseOver(evt: any) {
    // console.log('Date terhover', evt);
    const mom = moment(evt);
    console.log('Date terhover', mom);
    this.hoverDate = evt;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  changeLanguage(): void {
    this.i18n.setLocale(en_US);
  }

  getNumberOfWeek(offset: number, date?: any) {
    //Zero : end week = friday
    const today : any = new Date(date) || new Date();
    const n = today.getDate();
    today.setDate(n+offset);
    const firstDayOfYear : any = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

}
