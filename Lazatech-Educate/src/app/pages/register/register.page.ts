import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { RegisterPageForm } from './register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  form: FormGroup;

  name: string;
  email: string;
  password: string;

  constructor
  (
    private router: Router, 
    private formBuilder: FormBuilder,
    private afs: AngularFirestore,
    private afauth: AngularFireAuth,
    private loadingctrl: LoadingController,
    private toastr: ToastController
  ) 
    { }

  ngOnInit() {
    this.form = new RegisterPageForm(this.formBuilder).createForm();
  }

  async register(){
    if(this.name && this.email && this.password){
      const loading = await this.loadingctrl.create({
        message: 'proccessing registration..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afauth.createUserWithEmailAndPassword(this.email, this.password).then((data) =>{
        data.user.sendEmailVerification();
        this.afs.collection('user').doc(data.user.uid).set({
          'userId': data.user.uid,
          'userName': this.name,
          'userEmail': this.email
        })
        .then(()=>{
          loading.dismiss();
          this.toast('Registration Succesfull Please Check your Email!', 'success')
          this.router.navigate(['/login']);
        })
        .catch(error => {
          loading.dismiss();
          this.toast(error.message, 'danger');
        })
      })
      .catch(error => {
        loading.dismiss()
        this.toast(error.message, 'danger')
      })
    }else{
      this.toast('Please complete the form', 'warning');
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
