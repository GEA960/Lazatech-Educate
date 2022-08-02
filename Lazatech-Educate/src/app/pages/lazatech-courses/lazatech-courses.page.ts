import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lazatech-courses',
  templateUrl: './lazatech-courses.page.html',
  styleUrls: ['./lazatech-courses.page.scss'],
})
export class LazatechCoursesPage implements OnInit {

  constructor( private router: Router,
    private auth: AuthService,
    private toastr: ToastController) { }

  ngOnInit() {
  }
  go(){
    this.router.navigate(['course1'])
  }
}
