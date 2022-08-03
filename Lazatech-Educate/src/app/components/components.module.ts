import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrMessageComponent } from "./err-message/err-message.component";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [ErrMessageComponent],
    imports: [CommonModule, IonicModule],
    exports: [ErrMessageComponent]
})

export class ComponentsModule {}