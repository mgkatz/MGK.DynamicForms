import { Input, Directive, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ComponentMetadata } from '../../models';
import { ComponentTemplate } from '../../models/enums';

@Directive()
export abstract class DynamicEditorComponentBase implements OnInit {

    @Input() metadata: ComponentMetadata;
    @Input() value: any;
    @Input() form: FormGroup;

    labelMetadata: ComponentMetadata;
    placeholder: string = "";

    ngOnInit() {
        this.setLabelMetadata();
        this.setPlaceholder();
    }

    disable(id: string) {
        if (!this.hasValue(id)) {
            id = this.metadata.id;
        }

        this.form.controls[id].disable();
    }

    enable(id: string) {
        if (!this.hasValue(id)) {
            id = this.metadata.id;
        }

        this.form.controls[id].enable();
    }

    hasValue(value: any): Boolean {
        return (value);
    }

    setLabelMetadata() {
        this.labelMetadata = {
            display: {
                componentType: ComponentTemplate.label
            },
            editor: {
                componentType: ComponentTemplate.label,
                isRequired: this.metadata.editor.isRequired,
                isEmail: false
            },
            id: `label${this.metadata.id}`,
            isEditable: false,
            label: this.metadata.label,
            width: this.metadata.width
          };
    }

    setPlaceholder(): void {
        if (this.metadata.editor.placeholder) {
            this.placeholder = this.metadata.editor.placeholder;
        }
    }

}
