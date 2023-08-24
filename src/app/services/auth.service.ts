import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User) {
    return this.afa.signInWithEmailAndPassword(user.email, user.password)
  }

  register(user: User) {
    return this.afa.createUserWithEmailAndPassword(user.email, user.password)
  }

  getAuth() {
    return this.afa;
  }

  logout() {
    return this.afa.signOut();
  }


}
