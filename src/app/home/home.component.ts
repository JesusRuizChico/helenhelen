import { Component, OnInit } from '@angular/core';
import { ListServices } from '../services/list.services';
import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',

  animations: [
    trigger('enterState', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          stagger(50, [
            animate('200ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
          ])
        ],{optional: true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit{
  public message = ``;
  constructor(public list : ListServices) { }
  ngOnInit(): void {}

}
