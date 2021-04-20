import { Component, OnInit } from '@angular/core';
interface listLogs {
  key: string;
  site: string;
  user: string;
  ip: string;
  type: string;
  date: string;
  description: string;
  status: string;
}
@Component({
  selector: 'app-view-logs',
  templateUrl: './view-logs.component.html',
  styles: [
  ]
})
export class ViewLogsComponent implements OnInit {
  listOfData: listLogs[] = [
    {
      key: '1',
      site: '1',
      user: '1000',
      ip: '192.168.1.1',
      type: 'info',
      date: 'Abril 22 2021',
      description: 'description table',
      status: 'ok',
    },
    {
      key: '2',
      site: '2',
      user: '1249',
      ip: '192.168.1.2',
      type: 'info',
      date: 'Abril 22 2021',
      description: 'description table',
      status: 'ok',
    },
    {
      key: '3',
      site: '3',
      user: '2487',
      ip: '192.168.1.3',
      type: 'info',
      date: 'Abril 22 2021',
      description: 'description table',
      status: 'ok',
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
