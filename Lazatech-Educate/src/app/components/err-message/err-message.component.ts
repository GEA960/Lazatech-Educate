import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-err-message',
  templateUrl: './err-message.component.html',
  styleUrls: ['./err-message.component.scss'],
})
export class ErrMessageComponent implements OnInit {

  @Input() message: string;
  @Input() field: AbstractControl;
  @Input() error: string;

  constructor() { }

  ngOnInit() {}

  showErrorMessage(){
    if(this.field.touched && this.field.errors?.[this.error]){
      return true;
    }else if(this.field.touched && this.field.errors?.mail){

    }
    return false;
  }

}
