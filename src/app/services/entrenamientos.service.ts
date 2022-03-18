import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class EntrenamientosService {
  constructor(private angularFirestore: AngularFirestore) {}

  getCategories = (id): Promise<any> =>
    this.angularFirestore.collection('rutinas').doc(id).get().toPromise();
}
