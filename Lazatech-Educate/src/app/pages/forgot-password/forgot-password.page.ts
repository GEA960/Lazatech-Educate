import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ForgotPageForm } from './forgot.form';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  form: FormGroup;

  email: string;

  constructor(
    private formBuilder: FormBuilder,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private afauth: AngularFireAuth,
    private router: Router
    ) {}

  ngOnInit() {
    this.form = new ForgotPageForm(this.formBuilder).createForm();
  }

  async forgot(){

    if(this.email){

      const loading = await this.loadingCtrl.create({
        message: 'Sending Reset Password link...',
        spinner : 'crescent',
        showBackdrop : true
      });
      loading.present();

      this.afauth.sendPasswordResetEmail(this.email)
      .then(() => {
        loading.dismiss();
        this.toast('Please check your email!', 'success');
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        loading.dismiss();
        this.toast(error.message, 'danger');
      })

  }else{
    this.toast('Please enter your email address!', 'danger');
  }

  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

}
