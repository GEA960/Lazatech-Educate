import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

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

  id: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  test(){
    console.log('test')
  }

}
