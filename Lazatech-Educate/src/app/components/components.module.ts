import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrMessageComponent } from "./err-message/err-message.component";

@NgModule({
    declarations: [ErrMessageComponent],
    imports: [CommonModule],
    exports: [ErrMessageComponent]
})

export class ComponentsModule {}