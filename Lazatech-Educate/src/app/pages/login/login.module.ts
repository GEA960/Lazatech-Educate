import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ErrMessageComponent } from 'src/app/components/err-message/err-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    // ComponentsModule

  ],
  declarations: [LoginPage, ErrMessageComponent]
})
export class LoginPageModule {}
