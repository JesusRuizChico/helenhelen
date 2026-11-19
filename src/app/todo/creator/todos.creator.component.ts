import { Component, OnInit, Input } from '@angular/core';
import { ITodo,TStatus } from '../../structures/todos';
import { TodoService } from '../../services/todos.service';
import { animate, state, style, transition, trigger ,} from '@angular/animations';

@Component({
    selector: 'todo-creator',
    templateUrl: './todos.creator.component.html',
    animations:[
        trigger('openClose', [
            state ('collapsed, void ', style({height: '0px'})),
            state ('expanded, void ', style({height: '*'})),
            transition('collapsed <=> expanded', animate('300ms ease-in-out')),
        ])
    ]
})

export class TodosCreatorComponent implements OnInit{
    @Input() id!: string;
    public formState : string = 'collapsed';
    public todo : ITodo = { content: '', status: TStatus.Created }
    constructor(private todoS : TodoService){}
    ngOnInit(): void {
        
    }
    save(){
        this.todoS.add(this.id,this.todo);
    }
    toggleForm(){
        this.formState = (this.formState === 'collapsed') ? 'expanded' : 'collapsed';
    }
    label(){
        return (this.formState === 'collapsed') ? 'Agregar nuevo pendiente' : 'Ocultar Formulario';
    }
    icon(){
        return(this.formState === 'collapsed') ? 'fa-plus' : 'fa-caret-up';
    }
}
