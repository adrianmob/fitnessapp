import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private angularFire: AngularFireAuth) {}

  signInWithEmail(email: string, password: string) {
    return this.angularFire.signInWithEmailAndPassword(email, password);
  }

  checkIsAuth() {
    return this.angularFire.authState;
  }

  logout() {
    this.angularFire.signOut();
  }
}
