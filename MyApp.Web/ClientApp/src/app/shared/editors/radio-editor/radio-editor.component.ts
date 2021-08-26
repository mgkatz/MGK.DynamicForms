import { Component, OnInit } from '@angular/core';
import { ComponentTemplate } from '../../enums/component-template.enum';
import { editor } from '../../decorators/editor-decorator';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';

@Component({
  selector: 'app-radio-editor',
  templateUrl: './radio-editor.component.html',
  styleUrls: ['./radio-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.radio})
export class RadioEditorComponent extends DynamicEditorComponentBase implements OnInit {

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
