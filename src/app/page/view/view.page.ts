import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.page.html',
  styleUrls: ['./view.page.scss'],
})
export class ViewPage implements OnInit {

  
  public id: string;
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;

  constructor( 
    
    public activatedRoute: ActivatedRoute,
    private afs: AngularFirestore ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
console.log(this.id);
this.item = this.afs.doc<any>(`articles/${this.id}`).valueChanges();
     
  }

}
