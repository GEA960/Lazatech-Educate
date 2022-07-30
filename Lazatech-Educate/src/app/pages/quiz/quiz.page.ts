import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonItem } from '@ionic/angular';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.page.html',
  styleUrls: ['./quiz.page.scss'],
})
export class QuizPage implements OnInit {

  question: any;
  answers: any;
  questionAnswer: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    fetch('./assets/data/questions.json').then(res => res.json())
    .then(json => {
      console.log(json);
      return this.question = json['questions'];
    });
  }

}
