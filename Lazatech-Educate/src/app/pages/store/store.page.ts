import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  id: any;

  constructor() { }

  ngOnInit() {
  }

  test(){
    console.log('hello')
  }

}
