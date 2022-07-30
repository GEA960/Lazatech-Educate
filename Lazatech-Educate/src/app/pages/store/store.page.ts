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

  constructor(private router: Router, private afs: AngularFirestore, private auth: AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.user = user;
      this.name = user.userName;
      this.email = user.userEmail;
      this.token = user.userToken;
    })
  }

  async alert(header, message, subheader, price){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      subHeader: subheader,
      buttons: [{
        text: 'Cancel'
        },
        {
          text: 'Buy',
          handler: () =>{
            this.pay(price)
          }
        }
      ]
    });
    await alert.present();
  }

  async alert2(header2, message2){
    const alert2 = await this.alertCtrl.create({
      header: header2,
      message: message2,
      buttons: ['Ok']
  });
  await alert2.present();
}

  details(i){
    if(i == 0 || (i == 1)){
      this.alert('Lazatech Mug', `Token Balance: ${this.token}.00`, 'Price: 3.00 tokens', 3)
    }
    else if(i == 2 || (i == 3)){
      this.alert('Lazatech Shirt', `Token Balance: ${this.token}.00`, 'Price: 5.00 tokens', 5)
    }
    else if(i == 4 || (i == 5)){
      this.alert('Lazatech Tumbler', `Token Balance: ${this.token}.00`, 'Price: 7.00 tokens', 7)
    }
    else if(i == 6 || (i == 7)){
      this.alert('Lazatech Tote Bag', `Token Balance: ${this.token}.00`, 'Price: 2.00 tokens', 2)
    }
  }

  pay(price){
    if(this.token < price){
      this.alert2('Alert', 'Not enough Tokens')
    }
    else{
      this.afs.collection('user').doc(this.userId).set({
        'userName': this.name,
        'userEmail': this.email,
        'userToken': this.token - price
      },{merge: true});
      this.alert2('Alert', 'Purchased Successfully')
    }
  }

}
