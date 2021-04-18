import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  isCollapsed = false;
  menuOptions:any[]=[];
  constructor() { }

  ngOnInit(): void {
    this.menuOptions = [
      {
        name:'Inicio',
        route:'home',
        icon:'home'
      },
      {
        name:'usuarios',
        route:'users',
        icon:'people'
      },
      {
        name:'Create problems',
        route:'problems',
        icon:'folder'
      },
      // {
      //   name:'Asignaciones y planes',
      //   route:'asignaciones-planes',
      //   icon:'card_travel'
      // },
    ]
  }

}
