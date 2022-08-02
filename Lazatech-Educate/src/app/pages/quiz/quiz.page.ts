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
  course1: boolean;
  course1Score: number = 0;

  index: number = 0;
  items: number;
  score: number = 0;

  constructor(private afs: AngularFirestore, private auth: AuthService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.userId = user.userId;
      this.user = user;
      this.name = user.userName;
      this.email = user.userEmail;
      this.token = user.userToken;
      this.course1 = user.userCourse1;
      this.course1Score = user.userCourse1Score;
    }),

    fetch('./assets/data/questions.json').then(res => res.json())
    .then(json => {
      this.qstn = json['C1L1questions'];
    });
  }

  answer(){
    if (this.course1 == false){
      this.show = true;
      this.items = this.qstn.length;
      if(this.index < this.items - 1){
        if (this.qAnswer == null){

        }
        else if(this.qAnswer == this.qstn[this.index].answer){
          this.afs.collection('user').doc(this.userId).set({
            'userName': this.name,
            'userEmail': this.email,
            'userToken': this.token + 1,
            'userCourse1Score': this.course1Score + 1
          },{merge: true});
          this.alert('Congratulations', 'You earned a token');
          this.qAnswer = null;
          this.index += 1;
          return this.score += 1;
        }
        else if(this.qAnswer != this.qstn[this.index].answer){
          this.alert('Sorry You got the wrong answer', `Correct answer is: ${this.qstn[this.index].answer}`);
          this.qAnswer = null;
          this.index += 1;
        }
      }
      
      else if(this.index >= this.items - 1){
        this.show = false;
        this.alert('Congratulations', `You earned ${this.score} out of ${this.items - 1} tokens`)
        this.afs.collection('user').doc(this.userId).set({
          'userName': this.name,
          'userEmail': this.email,
          'userToken': this.token,
          'userCourse1Score': this.course1Score,
          'userCourse1': this.course1 = true
        },{merge: true});
      }
    }
    else if(this.course1 == true){
      this.alert('You have already taken the course quiz', `You scored ${this.course1Score} points`)
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