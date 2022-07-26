import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-my-token-balance',
  templateUrl: './my-token-balance.page.html',
  styleUrls: ['./my-token-balance.page.scss'],
})
export class MyTokenBalancePage implements OnInit {

  user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      this.user = user;
    })
  }

}
