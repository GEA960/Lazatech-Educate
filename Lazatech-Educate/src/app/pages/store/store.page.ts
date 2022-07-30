import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  userId: string;
  user: any;
  name: string;
  email: string;
  token: number;

  merchs: any[] = [
    '../../../assets/Lazatech-Merch/1.png',
    '../../../assets/Lazatech-Merch/2.png',
    '../../../assets/Lazatech-Merch/3.png',
    '../../../assets/Lazatech-Merch/4.png',
    '../../../assets/Lazatech-Merch/5.png',
    '../../../assets/Lazatech-Merch/6.png',
    '../../../assets/Lazatech-Merch/7.png',
    '../../../assets/Lazatech-Merch/8.png'
  ]

  public open: boolean = false;

  constructor(private router: Router, private afs: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.user = user;
      this.name = user.userName;
      this.email = user.userEmail;
      this.token = user.userToken;
    })
  }

  // This is just a test
  details(i){
    if(i == 0 || (i == 1)){
      console.log('mug');
    }
    else if(i == 2 || (i == 3)){
      console.log('tshirt');
    }
    else if(i == 4 || (i == 5)){
      console.log('tumbler');
    }
    else if(i == 6 || (i == 7)){
      console.log('tote bag');
    }
  }

}
