import { Component, Input, OnInit } from "@angular/core";
import { ITodo, TStatus } from "../../structures/todo";
import { animate, state, style, transition, trigger } from "@angular/animations";
import { TodoService } from "../../services/todos.services";


@Component({
    selector: 'todo-card',
    templateUrl: './todo.card.component.html',
    animations: [
        trigger('stateAnimation', [
            state('0, void', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            state('1', style({
                transform: 'translateX(-100%)',
                opacity: 0
            })),
            transition('0 => 1', [
                animate(200, style({
                    transform: 'translateX(0)',
                    opacity: 0
                })),
                animate(200)
            ]),
        ]),



        trigger('pressAnimation', [
            state('Up,void', style({
                transform: 'translateX(0)'
            })),
            
            state('Down', style({
                transform: 'translateX(-100px)'
            })),
            transition('Up => Down', [
                animate(100, style({
                    transform: 'translateX(0)'
                })),
                animate(100)
            ]),
        ])
    ]
})

export class TodoCardComponent implements OnInit {
    @Input() todo!: ITodo;
    @Input() listId!: string;
    constructor(private todoS: TodoService) { }
    public press: string = "Up";
    ngOnInit(): void {}

    completed() {
        console.log("swipe left");
        this.todo.status = TStatus.Completed;
        this.todoS.update(this.listId, this.todo);
    }
}