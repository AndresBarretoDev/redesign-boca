import { Component, OnInit } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-create-problems',
  templateUrl: './create-problems.component.html',
  styles: [
  ]
})

export class CreateProblemsComponent implements OnInit {
 
  constructor() { }
  isVisible = false;
  ngOnInit(): void {
  }
  

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
