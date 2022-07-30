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
  qAnswer: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    fetch('./assets/data/questions.json').then(res => res.json())
    .then(json => {
      return this.question = json['C1L1questions'];
    });

  }

  answer(){
    console.log('Selected Value:', this.qAnswer)
  }

}
