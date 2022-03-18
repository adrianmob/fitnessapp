import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class RutinasService {
  constructor(private angularFirestore: AngularFirestore) {}

  getCategories = (): Promise<any> =>
    this.angularFirestore.collection('categories').get().toPromise();
}
