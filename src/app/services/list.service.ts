import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AuthServices } from './auth.services';
import { Lista } from "../structures/lista";
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable()
export class ListService {
    public uid!: string;
    public listCollection!: AngularFirestoreCollection<Lista>;
    public lists!: Observable<Lista[]>;

    constructor(public afs : AngularFirestore, private auth : AuthServices) {
        this.auth.getUser().subscribe(user => {
            this.uid=user.uid;

            if(this.uid)this.setCollection();
        })
    }

    setCollection(){
        this.listCollection = this.afs.collection('users').doc(this.uid).collection<Lista>('lists');

        this.lists = this.listCollection.snapshotChanges().pipe(
            map(actions => 
                actions.map(item=>{
                    const data = item.payload.doc.data() as Lista;
                    const id = item.payload.doc.id;

                    return {...data, id}
                })
            )
        );
    }
    add(list:Lista): Promise<any> {
        if(!this.listCollection)throw Error("Asignar un valor a la coleccion antes de tratar de agregar un elemento");
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();
    
    list.createdAt = createdAt;
    return this.listCollection.add(list);
}
}
