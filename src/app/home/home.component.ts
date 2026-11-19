import { Component,OnInit } from '@angular/core';
import { ListService } from '../services/list.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations:[
          trigger('enterState',[
              state('void', style({
                  transform: 'translateX(-100%)',
                  opacity: 0
              })),
              transition(':enter',[
                  animate(300, style({
                      transform: 'translateX(0)',
                      opacity: 1
                  }))
              ])
          ])
      ]
})
export class HomeComponent implements OnInit {
  public message = `Angular Universal`;

  constructor(public listS: ListService) { }

  ngOnInit(): void {

  }

  completed() {
    console.log('Swipe');
  }
}
