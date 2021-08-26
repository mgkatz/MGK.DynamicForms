import { Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ComponentTemplateWidth } from "../enums/component-template-width.enum";
import { ErrorMessages } from "../messages/error.messages";
import { MessageHandler } from "../services/message-handler.service";
import { ComponentMetadata } from "./component-metadata.model";

export abstract class ComponentMetadataPage {

    protected messageHandler: MessageHandler;

    public properties: ComponentMetadata[];
    public myForm: FormGroup;

    constructor(
        inject: Injector
        ) {
        this.messageHandler = inject.get(MessageHandler);
    }

    abstract pageName(): string;
    abstract pageOperation(): string;
    
    public get controlWidth(): typeof ComponentTemplateWidth {
        return ComponentTemplateWidth; 
    }

    showFormValidationErrors() {
        if (!this.myForm.invalid) {
          return;
        }
    
        this.myForm.markAsDirty();
        Object.keys(this.myForm.controls).forEach(key => {
          this.myForm.controls[key].markAsDirty();
          this.myForm.controls[key].markAsTouched();
        });
    
        this.messageHandler.notifyError(null, ErrorMessages.invalidForm);
    }

    validateForm() {
        this.myForm.updateValueAndValidity();
    
        if (this.myForm.invalid) {
          this.showFormValidationErrors();
        }
    }

}
