import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.page.html',
  styleUrls: ['./sidenav.page.scss'],
})
export class SidenavPage implements OnInit {

  active = '';

  NAV = [
    {
      name: 'Home',
      link: 'nav/home',
      icon: 'home'
    },
    {
      name: 'Lazatech Courses',
      link: 'nav/lazatech-courses',
      icon: 'school'
    },
    {
      name: 'Enrolled Courses',
      link: 'nav/enrolled-courses',
      icon: 'book'
    },
    {
      name: 'My Token Balance',
      link: 'nav/my-token-balance',
      icon: 'wallet'
    },
    {
      name: 'My Payouts',
      link: 'nav/my-payouts',
      icon: 'cash'
    },
  ]

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.active = event.url
    })
  }

  ngOnInit() {
  }

}
