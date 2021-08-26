import { Input, Directive } from '@angular/core';
import { ComponentMetadata } from '../models/component-metadata.model';

@Directive()
export abstract class DynamicDisplayComponentBase {
    @Input() metadata: ComponentMetadata;
    @Input() value: any;

    public hasValue(value: any): Boolean {
        return (value);
    }

    public isLabelRequired() {
        return this.hasValue(this.metadata.editor)
            && this.metadata.editor.isRequired
            && this.hasValue(this.metadata.label);
    }
}
