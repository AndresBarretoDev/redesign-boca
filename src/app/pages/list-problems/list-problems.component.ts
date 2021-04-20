import { Component, OnInit } from '@angular/core';


interface Person {
  key: string;
  problems: string;
  runs: number;
  score: string;
  clarifications: string;
  task: string;
  backups: string;
  logouts: string;
}


@Component({
  selector: 'app-list-problems',
  templateUrl: './list-problems.component.html',
  styles: [
  ]
})
export class ListProblemsComponent implements OnInit {
  listOfData: Person[] = [
    {
      key: '1',
      problems: 'John Brown',
      runs: 32,
      score: '',
      clarifications:'',
      task:'',
      backups:'',
      logouts:'',
    },
    {
      key: '2',
      problems: 'Jim Green',
      runs: 42,
      score: '',
      clarifications:'',
      task:'',
      backups:'',
      logouts:'',
    },
    {
      key: '3',
      problems: 'Joe Black',
      runs: 32,
      score: '',
      clarifications:'',
      task:'',
      backups:'',
      logouts:'',
    }
  ];
  isVisible:boolean = false;
  dataModal:any;
  constructor() { }

  ngOnInit(): void {
  }
  showModal(data:any): void {
    console.log(data);
    this.isVisible = true;
    this.dataModal = data
  }
  handleCancel(){
    this.isVisible = false
  }
  handleOk(){
    this.isVisible = false
  }

}
