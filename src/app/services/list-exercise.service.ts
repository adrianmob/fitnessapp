import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class ListExerciseService {
  constructor(private angularFirestore: AngularFirestore) {}

  getList = (): Promise<any> =>
    this.angularFirestore.collection('video').get().toPromise();

  getListCat = (id): Promise<any> =>
    this.angularFirestore
      .collection('video')
      .ref.where('category', '==', id)
      .get();
}
