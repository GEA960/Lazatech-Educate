import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-my-token-balance',
  templateUrl: './my-token-balance.page.html',
  styleUrls: ['./my-token-balance.page.scss'],
})
export class MyTokenBalancePage implements OnInit {

  userId: string;
  user: any;
  name: string;
  email: string;
  token: number;


  constructor(private auth: AuthService, private afs: AngularFirestore, private afauth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.user = user;
      this.name = user.userName;
      this.email = user.userEmail;
      this.token = user.userToken;
    })
  }

  // for testing purposes only
  add(){
    this.afs.collection('user').doc(this.userId).set({
      'userName': this.name,
      'userEmail': this.email,
      'userToken': this.token + 1
    },{merge: true});
  }

}
