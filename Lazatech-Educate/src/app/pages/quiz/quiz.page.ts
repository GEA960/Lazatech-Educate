import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  qstn: any;
  questions: any;
  qAnswer: any;
  public index: number = 0;
  show: boolean;

  userId: string;
  user: any;
  name: string;
  email: string;
  token: number;

  constructor(private afs: AngularFirestore, private auth: AuthService) { }

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

  take(){
    this.show = true;
    this.answer()
  }

  answer(){
    this.questions = this.qstn[this.index];
    if (this.qAnswer == null){
      console.log('No answer')
      console.log(this.index)
    }
    else if(this.qAnswer == this.questions.answer){
      console.log('Correct');
      console.log(this.index)
      this.index++;
    }
    else if(this.qAnswer != this.questions.answer){
      console.log('Wrong');
      console.log(this.index);
      this.index++;
    }
  }

}
