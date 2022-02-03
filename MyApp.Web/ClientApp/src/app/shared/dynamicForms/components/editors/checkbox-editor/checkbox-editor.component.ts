import { Component, OnInit } from '@angular/core';
import { editor } from '../../../decorators/editor-decorator';
import { ComponentTemplate } from '../../../models/enums';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';

@Component({
  selector: 'app-checkbox-editor',
  templateUrl: './checkbox-editor.component.html',
  styleUrls: ['./checkbox-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.checkbox})
export class CheckboxEditorComponent extends DynamicEditorComponentBase implements OnInit {

    showTextBefore: boolean = true;

    constructor() {
        super();
    }

    ngOnInit() {
        super.ngOnInit();
        this.readCustomProperties();
    }

    readCustomProperties(): void {
        if (this.hasValue(this.metadata.editor.customProperties)) {
            var customProperties = this.metadata.editor.customProperties;
            customProperties.forEach((customProperty) => {
                if (this.hasValue(customProperty) && this.hasValue(customProperty.name)) {
                    switch(customProperty.name) {
                        case "ShowTextBefore": {
                            this.showTextBefore = customProperty.value;
                            break;
                        }
                    }
                }
            });
        }
    }

}
