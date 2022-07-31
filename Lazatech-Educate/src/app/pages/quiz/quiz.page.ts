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
  show: boolean;

  userId: string;
  user: any;
  name: string;
  email: string;
  token: number;

  index: number = 0;

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

  answer(){
    this.show = true;
    
    if (this.qAnswer == null){
      console.log('No answer')
    }
    else if(this.qAnswer == this.qstn[this.index].answer){
      console.log('user answer: ', this.qAnswer);
      console.log('correct answer: ', this.qstn[this.index].answer)
      return this.index += 1;
    }
    else if(this.qAnswer != this.qstn[this.index].answer){
      console.log('user answer: ', this.qAnswer);
      console.log('correct answer: ', this.qstn[this.index].answer)
      return this.index += 1;
    }
  }

}
