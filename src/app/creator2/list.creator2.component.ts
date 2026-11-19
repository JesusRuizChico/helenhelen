import { Component, OnInit } from "@angular/core";
import { Lista2 } from "../structures/lista2";


@Component({
    selector: 'creator2',
    templateUrl: 'list.creator2.component.html'

})

export class ListCreator2Component implements OnInit {
   
    public list : Lista2 = {title : ""};

    ngOnInit(): void {

    }
    save() {
        console.log(this.list);
    }
}