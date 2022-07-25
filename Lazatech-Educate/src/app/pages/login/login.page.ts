import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { LoginPageForm } from './login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  form: FormGroup;

  email: string;
  password: string;

  constructor
  (
    private formBuilder: FormBuilder, 
    private router: Router,
    private auth: AuthService,
    private toastr: ToastController
  ) { }

  ngOnInit() {
    this.form = new LoginPageForm(this.formBuilder).createForm();
  }

  async toast(message, status){
    const toast = await this.toastr.create({
      message: message,
      color: status,
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

  login(){
    if(this.email && this.password){
      this.auth.signIn(this.email, this.password);
    }else{
      this.toast ('Please enter your email and password!', 'warning');
    }
  }

  register(){
    this.router.navigate(['./register']);
  }
}
