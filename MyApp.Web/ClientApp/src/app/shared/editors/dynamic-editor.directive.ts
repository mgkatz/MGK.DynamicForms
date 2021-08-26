import { ComponentFactoryResolver, ComponentRef, Directive, Input, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessages } from '../messages/error.messages';
import { DynamicEditorComponentBase } from './dynamic-editor-component-base';
import { DynamicEditorRegistryService } from './dynamic-editor-registry.service';

@Directive({selector: '[appDynamicEditorHost]'})
export class DynamicEditorDirective {

    @Input() metadata: any; // PropertyBagMetadataItem
    @Input() value: any;
    @Input() form: FormGroup;

    component: ComponentRef<DynamicEditorComponentBase>;
    @Input() parent: any;

    constructor(
        private container: ViewContainerRef,
        private resolver: ComponentFactoryResolver,
        private dynamicEditorRegistry: DynamicEditorRegistryService) {}

    ngOnInit() {

        const editorComponent = this.dynamicEditorRegistry
            .getEditorTemplate(this.metadata.editor.componentType.toLowerCase());
      
        if (!editorComponent) {
            throw new Error(ErrorMessages.useOfUnsupportedType(this.metadata.editor.componentType));
        }

        const component = this.resolver.resolveComponentFactory<DynamicEditorComponentBase>(editorComponent);
        this.component = this.container.createComponent(component);
        this.component.instance.metadata = this.metadata;
        this.component.instance.value = this.value;
        this.component.instance.form = this.form;

    }

}
