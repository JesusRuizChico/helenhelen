import { Component, OnInit } from "@angular/core";
import { Lista } from "../structures/lista";
import { ListService } from "../services/list.service";

@Component({
    selector: 'creator',
    templateUrl: 'list.creator.component.html'

})

export class ListCreatorComponent implements OnInit {
   
    public list : Lista = {title : ""};

    constructor(private listS : ListService) {}

    ngOnInit(): void {

    }
    save() {
        this .listS.add(this.list).then((result) => {
            this.list.title = "";
        });
    }
}