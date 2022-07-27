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

  user: any;
  nToken: number;
  id: any;


  constructor(private auth: AuthService, private afs: AngularFirestore, private afauth: AngularFireAuth) {}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

  // update(){
  //   this.nToken = this.user.userToken += 1

  // }

}
