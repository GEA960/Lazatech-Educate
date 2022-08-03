import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ErrMessageComponent } from 'src/app/components/err-message/err-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    // ComponentsModule
  ],
  declarations: [RegisterPage, ErrMessageComponent]
})
export class RegisterPageModule {}
