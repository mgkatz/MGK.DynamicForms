import { Component, OnInit } from '@angular/core';
import { ComponentTemplate } from '../../enums/component-template.enum';
import { editor } from '../../decorators/editor-decorator';
import { DynamicEditorComponentBase } from '../dynamic-editor-component-base';
import { BooleanOptions } from '../../enums/boolean-options.enum';

@Component({
  selector: 'app-boolean-editor',
  templateUrl: './boolean-editor.component.html',
  styleUrls: ['./boolean-editor.component.css','../dynamic-editor.style.css']
})

@editor({name: ComponentTemplate.bool})
export class BooleanEditorComponent extends DynamicEditorComponentBase implements OnInit {

    public on: string = "On";
    public off: string = "Off";

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
                        case "BooleanOptions": {
                            this.setDataOnOff(customProperty.value);
                            break;
                        }
                    }
                }
            });
        }
    }

    setDataOnOff(options: BooleanOptions) {
        switch(options) {
            case BooleanOptions.activeInactive: {
                this.off = "Inactive";
                this.on = "Active";
                break;
            }

            case BooleanOptions.enabledDisabled: {
              this.off = "Disabled";
              this.on = "Enabled";
              break;
            }
            
            case BooleanOptions.openClose: {
              this.off = "Close";
              this.on = "Open";
              break;
            }
            
            case BooleanOptions.trueFalse: {
              this.off = "False";
              this.on = "True";
              break;
            }
            
            case BooleanOptions.yesNo: {
              this.off = "No";
              this.on = "Yes";
              break;
            }
            
            default: {
              this.off = "Off";
              this.on = "On";
              break;
            }
        }
    }
  
  }
