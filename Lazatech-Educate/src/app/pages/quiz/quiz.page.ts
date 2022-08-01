import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  qstn: any;
  questions: any;
  qAnswer: any;
  show: boolean;

  userId: string;
  user: any;
  name: string;
  email: string;
  token: number;

  index: number = 0;
  items: number;

  constructor(private afs: AngularFirestore, private auth: AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.user = user;
      this.name = user.userName;
      this.email = user.userEmail;
      this.token = user.userToken;
    }),

    fetch('./assets/data/questions.json').then(res => res.json())
    .then(json => {
      this.qstn = json['C1L1questions'];
    });
  }

  answer(){
    this.show = true;
    this.items = this.qstn.length;
    if(this.index < this.items){
      if (this.qAnswer == null){

      }
      else if(this.qAnswer == this.qstn[this.index].answer){
        this.afs.collection('user').doc(this.userId).set({
          'userName': this.name,
          'userEmail': this.email,
          'userToken': this.token + 1
        },{merge: true});
        this.alert('Congratulations', 'You earned a token');
        this.qAnswer = "";
        return this.index += 1;
      }
      else if(this.qAnswer != this.qstn[this.index].answer){
        this.alert('Sorry You got the wrong answer', `Correct answer is: ${this.qstn[this.index].answer}`);
        this.qAnswer = "";
        return this.index += 1;
      }
    }
    // Still working on this
    else if(this.index = this.items - 1){
      console.log('ubos na tanong')
    }
    // and this also
    else{
      console.log('ewan')
    }
  }


  async alert(header, message){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}