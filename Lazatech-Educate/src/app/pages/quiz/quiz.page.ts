import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  qstn: any;
  questions: any;
  qAnswer: any;
  index: number = 0;
  show: boolean;

  constructor() { }

  ngOnInit() {
    fetch('./assets/data/questions.json').then(res => res.json())
    .then(json => {
      this.qstn = json['C1L1questions'];
    });
  }

  take(){
    this.show = true;
    this.answer();
  }

  answer(){
    this.questions = this.qstn[this.index];
    if (this.qAnswer == null){
      console.log('No answer')
    }
    else{
      console.log('Selected Value:', this.qAnswer)
      return this.index = this.index + 1
    }
  }

}
