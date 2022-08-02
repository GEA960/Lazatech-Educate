import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-lazatech-courses',
  templateUrl: './lazatech-courses.page.html',
  styleUrls: ['./lazatech-courses.page.scss'],
})
export class LazatechCoursesPage implements OnInit {

  id: boolean;

  constructor( private router: Router,
    private auth: AuthService,
    private toastr: ToastController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  go(id){
    if (id == true){
      this.router.navigate(['/course1'])
    }
    else if (id == false){
      this.alert('Alert', 'This course is currently unavailable')
    }
  }

  async alert(header, message){
    const alert = await this.alertCtrl.create({
      header: header,
      message: message,
      buttons: ['Ok']
    });
    await alert.present();
  }
}
